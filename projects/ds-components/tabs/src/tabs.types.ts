export type TabVariant = 'underline' | 'pill';
export type TabSize = 'small' | 'medium' | 'large';

export interface Tab {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface TabChangeEvent {
  previousId: string;
  currentTab: Tab;
}
