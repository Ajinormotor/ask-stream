import { BookmarkType } from "@/types";


const today = new Date().toISOString().split("T")[0];

export const bookmarksData: BookmarkType[] = [
  {
    id: "1",
    question: "Why is sentiment dropping this week?",
    date: today, 
    conversations: [
      {
        id: "1-1",
        title: "Section 1",
        heading: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: "1-2",
        title: "Section 2",
        heading: "Commodo consequat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      },
      {
        id: "1-3",
        title: "Section 3",
        heading: "Ullamco laboris nisi",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
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
        dropdownContents: [
          {
            id: "1",
            title: "Sawyer Merritt",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.",
            date: "November 20,2025",
            tags: "App Store",
          },
          {
            id: "2",
            title: "Sawyer Merritt",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "November 20,2025",
            tags: "Playstore",
          },
        ],
      },
    ],
    demographics: {
      stats: [
        { id: "s1", label: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia", 
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
         },
        { id: "s2", label: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia", 
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
         },
        { id: "s3", label: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia", 
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
         },
      ],
      locations: [
        { country: "Nigeria", percentage: 42 },
        { country: "United Kingdom", percentage: 21 },
        { country: "United States", percentage: 18 },
        { country: "Germany", percentage: 9 },
        { country: "Others", percentage: 10 },
      ],
    },
    link: "http://www.hello/1234567",
  },
  {
    id: "2",
    question: "How are user engagement metrics trending?",
    date: "2025-12-04",
    conversations: [
      {
        id: "2-1",
        title: "Section 1",
        heading: "Engagement Overview",
        description: "User engagement metrics are stable with slight increases in mobile usage.",
      },
    ],
    demographics: {
      stats: [
        { id: "s1", label: "Total Responses", value: "980" },
        { id: "s2", label: "Countries", value: "8" },
        { id: "s3", label: "Top Region", value: "United States" },
      ],
      locations: [
        { country: "United States", percentage: 50 },
        { country: "Canada", percentage: 20 },
        { country: "UK", percentage: 15 },
        { country: "Germany", percentage: 10 },
        { country: "Others", percentage: 5 },
      ],
    },
    link: "http://www.hello/2345678",
  },
  {
    id: "3",
    question: "Which marketing channel drives the most conversions?",
    date: "2025-11-03",
    conversations: [
      {
        id: "3-1",
        title: "Section 1",
        heading: "Marketing Insights",
        description: "Email campaigns continue to outperform social media in conversion rates.",
      },
    ],
    demographics: {
      stats: [
        { id: "s1", label: "Total Responses", value: "1,050" },
        { id: "s2", label: "Countries", value: "10" },
        { id: "s3", label: "Top Region", value: "Germany" },
      ],
      locations: [
        { country: "Germany", percentage: 35 },
        { country: "France", percentage: 25 },
        { country: "Italy", percentage: 15 },
        { country: "Spain", percentage: 10 },
        { country: "Others", percentage: 15 },
      ],
    },
    link: "http://www.hello/3456789",
  },
  {
    id: "4",
    question: "What is the average response time for customer queries?",
    date: "2026-01-02",
    conversations: [
      {
        id: "4-1",
        title: "Section 1",
        heading: "Response Time Analysis",
        description: "Average response time has improved by 10% compared to last month.",
      },
    ],
    demographics: {
      stats: [
        { id: "s1", label: "Total Responses", value: "870" },
        { id: "s2", label: "Countries", value: "7" },
        { id: "s3", label: "Top Region", value: "Nigeria" },
      ],
      locations: [
        { country: "Nigeria", percentage: 60 },
        { country: "Kenya", percentage: 20 },
        { country: "South Africa", percentage: 10 },
        { country: "Others", percentage: 10 },
      ],
    },
    link: "http://www.hello/4567890",
  },
];
