import express from "express";

const router = express.Router();

router.post("/", createFood);
router.get("/", getFoods);
router.get("/:id", getSingleFood);
router.patch("/:id", updateFood);
router.delete("/:id", deleteFood);

export default router;
