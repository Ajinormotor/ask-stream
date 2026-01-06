import { BookmarkType } from "@/types";

export const bookmarksData: BookmarkType[] = [
  {
    id: "1",
    question: "Why is sentiment dropping this week?",
    date: "2026-01-05",
    sections: [
      {
        id: "1-1",
        title: "Section 1",
        heading: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
      {
        id: "1-2",
        title: "Section 2",
        heading: "Commodo consequat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      },
      {
        id: "1-3",
        title: "Section 3",
        heading: "Ullamco laboris nisi",
        description: "Ut enim ad minim veniam...",
      },
      {
        id: "1-4",
        title: "Section 4",
        heading: "Share to platforms",
        description: "Select platforms to share this report:",
        dropdownItems: [
          { id: "d1", label: "App Store", checked: false, icon: "Apple" },
          { id: "d2", label: "Play Store", checked: true, icon: "Android" },
          { id: "d3", label: "Instagram", checked: false, icon: "Instagram" },
        ],
        dropdownContents:[
          {
            id: '1',
            title: 'Sawyer Merritt',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.',
            date:'November 20,2025'
          },
              {
                  id: '2',
            title: 'Sawyer Merritt',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.',
            date:'November 20,2025'
          },
              {
                  id: '3',
            title: 'Sawyer Merritt',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.',
            date:'November 20,2025'
          },
              {
                  id: '4',
            title: 'Sawyer Merritt',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.',
            date:'November 20,2025'
          },
              {
                  id: '5',
            title: 'Sawyer Merritt',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.',
            date:'November 20,2025'
          },
          
        ]
      },
    ],
    demographics: {
      stats: [
        { id: "s1", label: "Total Responses", value: "1,240" },
        { id: "s2", label: "Countries", value: "12" },
        { id: "s3", label: "Top Region", value: "Nigeria" },
      ],
      locations: [
        { country: "Nigeria", percentage: 42 },
        { country: "United Kingdom", percentage: 21 },
        { country: "United States", percentage: 18 },
        { country: "Germany", percentage: 9 },
        { country: "Others", percentage: 10 },
      ],
    },
    link: "http://",
  },
];
