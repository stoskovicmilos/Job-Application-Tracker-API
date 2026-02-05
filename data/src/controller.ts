import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { readJobs, writeJobs } from "./db";
import { Job } from "./types";

export const getJobs = (_: Request, res: Response) => {
  res.json(readJobs());
};

export const addJob = (req: Request, res: Response) => {
  const jobs = readJobs();

  const newJob: Job = {
    id: uuid(),
    ...req.body,
    createdAt: new Date().toISOString()
  };

  jobs.push(newJob);
  writeJobs(jobs);

  res.status(201).json(newJob);
};

export const updateJob = (req: Request, res: Response) => {
  const jobs = readJobs();
  const index = jobs.findIndex(j => j.id === req.params.id);

  if (index === -1) return res.sendStatus(404);

  jobs[index] = { ...jobs[index], ...req.body };
  writeJobs(jobs);

  res.json(jobs[index]);
};

export const deleteJob = (req: Request, res: Response) => {
  const jobs = readJobs().filter(j => j.id !== req.params.id);
  writeJobs(jobs);

  res.sendStatus(204);
};
