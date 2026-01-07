export interface conversationType {
  id: string;
  title: string;
  heading: string;
  description: string;
  dropdownItems?: DropdownItem[]; 
  dropdownContents?: DropdownContent[]
}

export interface DropdownItem {
  id: string;
  label: string;
  checked: boolean;
  icon?: string;
}

export interface DropdownContent {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string;
}