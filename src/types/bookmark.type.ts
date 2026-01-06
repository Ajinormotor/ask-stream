import { SectionType } from "./section.type";


export type DemographicStat = {
  id: string;
  label: string;
  value: string;
};

export type LocationDistribution = {
  country: string;
  percentage: number;
};

export type BookmarkType = {
  id: string;
  question: string;
  date: string;
  sections: SectionType[];
  demographics: {
    stats: DemographicStat[];
    locations: LocationDistribution[];
  };
  link: string;
};
