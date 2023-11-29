import express from "express";
import { foodController } from "../controllers/food.controller";

const router = express.Router();

router.post("/",  foodController.createFood);
router.get("/", foodController.getFoods);
router.get("/:id", foodController.getSingleFood);
router.patch("/:id", foodController.updateFood);
router.delete("/:id", foodController.deleteFood);

export default router;
