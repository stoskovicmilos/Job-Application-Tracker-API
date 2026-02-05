import { Router } from "express";
import { getJobs, addJob, updateJob, deleteJob } from "./controller";

const router = Router();

router.get("/jobs", getJobs);
router.post("/jobs", addJob);
router.put("/jobs/:id", updateJob);
router.delete("/jobs/:id", deleteJob);

export default router;
