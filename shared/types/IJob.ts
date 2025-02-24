export interface IJob {
  id: number;
  title: string;
  company: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  description?: string[];
}
