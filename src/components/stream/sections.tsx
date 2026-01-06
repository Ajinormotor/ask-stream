import { SectionType, BookmarkType, DropdownItem } from "@/types";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown, Apple, Instagram, Phone, LucideIcon, CheckIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import DemographicSection from "./demographSection";
import Image from "next/image";

interface SectionsProps {
  sections: SectionType[];
  demographics?: BookmarkType["demographics"];
}

// const iconMap: Record<string, LucideIcon> = { Apple, Phone, Instagram };
const filterOptions = ["App Store", "Playstore X", "Instagram"];

const Sections = ({ sections, demographics }: SectionsProps) => {
 

  
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
      {sections.map((section) => {
        // Section 2: Demographics
        if (section.title === "Section 2" && demographics) {
          return (
            <div
              key={section.id}
              className="border border-[#EDEEF0] p-6 gap-6 max-w-131.5 w-full flex items-center justify-center"
            >
              <DemographicSection demographics={demographics} />
            </div>
          );
        }

        // Section 4: Dropdown
        if (section.title === "Section 4" && section.dropdownItems) {
          return (
        <div key={section.id}
         className="w-full bg-white border border-[#E3E8EE]  gap-5 max-h-109 overflow-y-scroll
          p-4 shadow-[0px_1px_4px_0px_#4F566B14]  flex-col items-center justify-between">

            <div className="flex items-center justify-between w-full">

        
        <div className="flex items-center gap-2">

          <span className="text-gray-700 font-medium">Data Source</span>
        </div>

        {/* Dropdown */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="flex items-center gap-1 px-3 py-1 border rounded-md border-gray-300 text-gray-700 hover:bg-gray-50">
            All
            <ChevronDownIcon className="w-4 h-4" />
          </DropdownMenu.Trigger>

          <DropdownMenu.Content className="bg-white rounded-md border border-gray-200 shadow-lg p-2">
            {filterOptions.map((option) => (
              <DropdownMenu.CheckboxItem
                key={option}
                className="flex items-center justify-between px-2 py-1 rounded hover:bg-gray-100 cursor-pointer"
              >
                {option}
                <DropdownMenu.ItemIndicator>
                  <CheckIcon className="w-4 h-4 text-blue-600" />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.CheckboxItem>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
            </div>


            <div className="flex flex-col gap-3 w-full ">
{
  section.dropdownContents && section.dropdownContents.map((content) => (
    <div key={content.id}
    className="flex flex-col w-full">

      <div className="flex items-center justify-between">
        <h1>{content.title}</h1>

        <div className="flex items-center gap-1">
          <p>{content.date}</p>
  <Image src={'../../assets/app-store.svg'} alt=""
  className=""  width={24} height={24}/>
        </div>
      </div>

      <p>{content.description}</p>

    </div>
  ))
}
            </div>

        
      </div>
          );
        }

        // Default section
        return (
          <div
            key={section.id}
            className="border border-[#EDEEF0] p-6 gap-2 max-w-131.5 w-full"
          >
            <h2 className="text-[#0F172A] font-semibold md:text-2xl pb-4">{section.title}</h2>
            <h3 className="text-[#0F172A] text-xl font-medium pb-2">{section.heading}</h3>
            <p className="text-[#667085] text-base font-normal">{section.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sections;

