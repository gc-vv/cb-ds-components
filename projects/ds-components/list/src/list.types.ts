export interface ListItem {
  id: string | number;
  primary: string;
  secondary?: string;
  avatar?: string;
  icon?: string;
  disabled?: boolean;
  selected?: boolean;
  divider?: boolean;
}
