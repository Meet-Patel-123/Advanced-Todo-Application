export interface Segments {
  start: number;
  end: number;
}

export interface ScheduleProps {
  startTime: string;
  duration: string;
  itemValue: ItemValue[];
  setIsScheduleShow: (isScheduleShow: boolean) => void;
  setItemValue: (itemValue: ItemValue[]) => void;
}

export interface ItemValue {
  id: number;
  hr: number;
  min: number;
  period: string;
  task: string;
  isImportant: string;
  isUrgent: string;
  isFocus: string;
}
