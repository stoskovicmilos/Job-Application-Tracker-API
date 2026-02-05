import fs from "fs";
import path from "path";
import { Job } from "./types";

const filePath = path.join(__dirname, "../data/jobs.json");

export const readJobs = (): Job[] => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

export const writeJobs = (jobs: Job[]) => {
  fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2));
};
