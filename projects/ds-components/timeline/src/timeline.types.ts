export type TimelineStepStatus = 'completed' | 'active' | 'pending';
export type TimelineOrientation = 'vertical' | 'horizontal';

export interface TimelineStep {
  id: string;
  label: string;
  description?: string;
  date?: string;
  status: TimelineStepStatus;
}
