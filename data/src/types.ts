export type Status =
  | "applied"
  | "interview"
  | "offer"
  | "rejected";

export interface Job {
  id: string;
  company: string;
  position: string;
  status: Status;
  notes: string;
  createdAt: string;
}
