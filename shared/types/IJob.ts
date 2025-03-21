export interface IJob {
  id: number;
  title: string;
  company: string;
  location?: string;
  start_date?: string;
  end_date?: string;
  description?: string[];
}
