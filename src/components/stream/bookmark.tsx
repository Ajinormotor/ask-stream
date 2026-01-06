import { BookmarkType } from "@/types";
import { filterLast7Days, filterToday, groupByMonth } from "@/utils";
import { BookmarkIcon, ChevronDown, ChevronUp, Link2, Tag } from "lucide-react";
import { useState } from "react";

interface BookmarkProps {
  data: BookmarkType[];
  activeId: string;
  onSelect: (item: BookmarkType) => void;
}

const STORAGE_KEY = "localBookmarks";

const Bookmark = ({ data, activeId, onSelect }: BookmarkProps) => {
  const [showToday, setShowToday] = useState(true);
  const [showDays, setShowDays] = useState(false);
  const [openMonth, setOpenMonth] = useState<string | null>(null);

  const [bookmarks] = useState<BookmarkType[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const handleBookmark = (item: BookmarkType) => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const existing: BookmarkType[] = stored ? JSON.parse(stored) : [];

    if (existing.some((b) => b.id === item.id)) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify([item, ...existing]));

    window.location.reload();
  };

  const months = groupByMonth(data);

  return (
    <div className="w-full border border-[#EDEEF0] h-full flex flex-col gap-3 p-2">
      {/* ---------------- Bookmarks ---------------- */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[#959AA6] text-base font-medium">Bookmarks</h1>

        {bookmarks.length === 0 ? (
          <p className="text-sm text-gray-400 px-2">No bookmarks</p>
        ) : (
          bookmarks.map((item) => <RenderItem key={item.id} item={item} />)
        )}
      </div>

      {/* ---------------- History ---------------- */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Today */}
        <SectionHeader
          title="Today"
          open={showToday}
          onToggle={() => setShowToday(!showToday)}
        />

        {showToday &&
          filterToday(data).map((item) => (
            <RenderItem
              key={item.id}
              item={item}
              activeId={activeId}
              onSelect={onSelect}
              onBookmark={handleBookmark}
            />
          ))}

        {/* Last 7 days */}
        <SectionHeader
          title="Last 7 days"
          open={showDays}
          onToggle={() => setShowDays(!showDays)}
        />

        {showDays &&
          filterLast7Days(data).map((item) => (
            <RenderItem
              key={item.id}
              item={item}
              activeId={activeId}
              onSelect={onSelect}
              onBookmark={handleBookmark}
            />
          ))}

        {/* Months */}
        {Object.entries(months).map(([month, items]) => {
          const isOpen = openMonth === month;

          return (
            <div key={month} className="flex flex-col">
              <SectionHeader
                title={month}
                open={isOpen}
                onToggle={() => setOpenMonth(isOpen ? null : month)}
              />

              {isOpen &&
                items
                  .slice(0, 5)
                  .map((item) => (
                    <RenderItem
                      key={item.id}
                      item={item}
                      activeId={activeId}
                      onSelect={onSelect}
                      onBookmark={handleBookmark}
                    />
                  ))}
            </div>
          );
        })}
      </div>

      {/* ---------------- Footer ---------------- */}
      <div className="flex items-center gap-2">
        <div className="flex items-center bg-[#EFEFFF] rounded-sm gap-1 px-2 py-0.5">
          <Tag size={10} color="#625AFA" />
          <span className="text-[#625AFA] text-sm font-medium">Beta</span>
        </div>
        <p className="text-sm text-gray-500">Conversational Analytics</p>
      </div>
    </div>
  );
};

export default Bookmark;



const SectionHeader = ({
  title,
  open,
  onToggle,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
}) => (
  <div
    onClick={onToggle}
    className="flex justify-between items-center py-2 cursor-pointer"
  >
    <p className="text-[#4F566B]">{title}</p>
    {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
  </div>
);

interface RenderItemProps {
  item: BookmarkType;
  activeId?: string;
  onSelect?: (item: BookmarkType) => void;
  onBookmark?: (item: BookmarkType) => void;
}

const RenderItem = ({
  item,
  activeId,
  onSelect,
  onBookmark,
}: RenderItemProps) => {
  return (
    <div
      onClick={() => onSelect?.(item)}
      className={`flex items-center justify-between py-3 px-2
         rounded-sm cursor-pointer group
        ${
          activeId === item.id
            ? "bg-[#EFEFFF] text-[#4F566B]"
            : "text-[#959AA6] hover:bg-[#EFEFFF]"
        }`}
    >
      <p className="truncate text-base">{item.question}</p>

      <div className="flex gap-2 opacity-0 group-hover:opacity-100">
        {onBookmark && (
          <BookmarkIcon
            size={16}
            onClick={(e) => {
              e.stopPropagation();
              onBookmark(item);
            }}
          />
        )}
        <Link2 size={16} />
      </div>
    </div>
  );
};
