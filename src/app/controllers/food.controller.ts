import { NextFunction, Request, Response } from "express";
import { foodService } from "../services/food.services";


export const getFoods = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await foodService.getFoods();

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Foods retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const createFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const foodData = req.body;
    const result = await foodService.createFood(foodData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Food created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const getSingleFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await foodService.getSingleFood(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Food retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const updateFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    // console.log(id, updatedData);    
    const result = await foodService.updateFood(id, updatedData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Food updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const deleteFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const result = await foodService.deleteFood(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Food deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const foodController={
    getFoods,
    getSingleFood,
    createFood,
    updateFood,
    deleteFood
}
