import Stack from "../Stack";
import { BookmarkType } from "@/types";



interface Props {
  demographics: BookmarkType["demographics"];
}

const bgColors = ["#E3E8EE", "#EFEFFF", "#F7F8F9", "#EEF2FF"];


const DemographicSection = ({ demographics }: Props) => {
  const cards = demographics.stats.map((stat, index) => (
    <div
      key={stat.id}
      className="w-full h-full rounded-2xl p-6 border border-[#E3E8EE] flex flex-col justify-center shadow-[0px_1px_4px_0px_#4F566B14]"
      style={{ backgroundColor: bgColors[index % bgColors.length] }}
    >
      <h2 className="text-[#0F172A] font-semibold text-xl pb-4">Section 2</h2>
      <h3 className="text-[#0F172A] text-lg font-medium pb-2">{stat.label}</h3>
      <p className="text-[#667085] text-base">{stat.value}</p>
    </div>
  ));

  return (
    <div className="flex flex-col w-full gap-6">
      {/* STACK */}
      <div className="w-119.5 h-80 -ml-4">
        <Stack cards={cards} sensitivity={120} sendToBackOnClick randomRotation={false} />
      </div>


  
    </div>
  );
};

export default DemographicSection;

