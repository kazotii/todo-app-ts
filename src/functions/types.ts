export type FilterStatus = "all" | "active" | "completed";

export interface Item {
  id: number;
  text: string;
  completed: boolean;
}

export interface ThemeContextType {
  theme: "light" | "dark";
  ToggleTheme: () => void;
}

export interface TodoItemProps {
  item: Item;
  deleteFunc: (id: number) => void;
  toggleFunc: (id: number) => void;
}

export interface FilterButtonProps {
  text: string;
  value: FilterStatus;
  setFil: (value: FilterStatus) => void;
  activeFilter: FilterStatus;
}

export interface ItemProps {
  tasks: Item[];
  deleteFunc: (id: number) => void;
  toggleFunc: (id: number) => void;
}