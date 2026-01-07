import { conversationType } from "./conversation.type";


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
  conversations: conversationType[];
  demographics: {
    stats: DemographicStat[];
    locations: LocationDistribution[];
  };
  link: string;
};
