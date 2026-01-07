import { conversationType, BookmarkType } from "@/types";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {  ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import DemographicConversation from "./demographSection";
import { useState } from "react";

interface ConversationsProps {
  conversations: conversationType[];
  demographics?: BookmarkType["demographics"];
   setShowAnalyze: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const filterOptions = ["All", "App Store", "Playstore", "X", "Instagram"];

const Conversations = ({ conversations, demographics,setShowAnalyze }: ConversationsProps) => {


const [selectedFilter, setSelectedFilter] = useState<string>("All");


const toggleFilter = (option: string) => {
  setSelectedFilter(option); 
};


const filterContent = (
  contents: typeof conversations[0]["dropdownContents"]
) => {
  if (!contents) return [];
  if (selectedFilter === "All") return contents;
  return contents.filter(
    (c) => c.tags.toLowerCase() === selectedFilter.toLowerCase()
  );
};



  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 ">
      {conversations.map((conversation) => {
        if (conversation.title === "Section 2" && demographics) {
          return (
            <div
              key={conversation.id}
              className="border border-[#EDEEF0] p-6 gap-6 max-w-131.5 max-h-109
               w-full flex items-center justify-center md:rounded-tr-lg"
            >
              <DemographicConversation demographics={demographics} />
            </div>
          );
        }

        if (conversation.title === "Section 4" && conversation.dropdownItems) {
          const filteredContents = filterContent(conversation.dropdownContents);

          return (
            <div
              key={conversation.id}
              className="w-full bg-white border border-[#E3E8EE]  max-h-94 overflow-y-auto
              px-3 py-6 shadow-[0px_1px_4px_0px_#4F566B14] flex flex-col items-center justify-between scrollbar-thin"
            >
              {/* Header */}
              <div className="flex items-center justify-between w-full ">
                <h1 className="text-[#959AA6] text-base font-medium">Data Source</h1>

                {/* Dropdown */}
<DropdownMenu.Root>
  <DropdownMenu.Trigger className="flex items-center gap-1 px-3 py-1 text-[#4F566B]">
    {selectedFilter}
    <ChevronDownIcon className="w-4 h-4 text-[#4F566B]" />
  </DropdownMenu.Trigger>

  <DropdownMenu.Content className="bg-white rounded-md border border-gray-200 shadow-lg p-2">
    {filterOptions.map((option) => (
      <DropdownMenu.CheckboxItem
        key={option}
        checked={selectedFilter === option}
        onCheckedChange={() => toggleFilter(option)}
        className="flex items-center px-2 py-1 gap-2 rounded hover:bg-gray-100 cursor-pointer"
      >
        {/* Real checkbox */}
        <input
          type="checkbox"
          checked={selectedFilter === option}
          readOnly
          className="w-4 h-4"
          aria-label={`Filter by ${option}`}
        />
        <span>{option}</span>
      </DropdownMenu.CheckboxItem>
    ))}
  </DropdownMenu.Content>
</DropdownMenu.Root>


              </div>

              {/* Filtered content */}
              <div className="flex flex-col gap-3 w-full pt-4">
                {filteredContents.length === 0 && (
                  <p className="text-sm text-gray-400 w-full h-full
                   flex items-center justify-center">
                    No items match this filter
                    </p>
                )}

                {filteredContents.map((content) => (
                  <div key={content.id} className="flex flex-col w-full gap-2.5 ">
                    <div className="flex items-center justify-between">
                      <h1 className="text-[#141232] text-base">{content.title}</h1>
                      <div className="flex items-center gap-1.5">
                        <p className="text-[#959AA6] text-sm w-full">{content.date}</p>
                        <Image
                          src="/app-store.svg"
                          alt=""
                          className=""
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>

                    <p className="text-[#4F566B] text-base">
                      {content.description.slice(0, 110) + "...."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        }

    
        return (
 <div
  key={conversation.id}
  className={`
    border border-[#EDEEF0] p-6 gap-2 max-w-131.5 w-full max-h-109 bg-white
    ${conversation.id === '1-1' ? "md:rounded-tl-lg" : "rounded-none "}
  `}
>
            <h2 className="text-[#0F172A] font-semibold text-2xl min-h-18 pb-4">
              {conversation.title}
            </h2>
            <h3 className="text-[#0F172A] text-xl font-medium pb-2">{conversation.heading}</h3>
            <p className="text-[#667085] text-base font-normal">{conversation.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Conversations;
