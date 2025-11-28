import { ReactNode } from "react";

export interface ListItemProps {
  icon: ReactNode;
  label: string;
  subLabel?: ReactNode;
  rightElement?: ReactNode;
  onClick?: () => void;
  hasChevron?: boolean;
}

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  activeColorClass?: string;
}