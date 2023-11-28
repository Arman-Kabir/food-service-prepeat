import { NextFunction, Request, Response } from "express";


export const getFoods = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const result = await getCowsService(filters, paginationOptions);
    const result = await foodService();

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
    const result = await foodService(foodData);
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
    const result = await foodService(id);
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

export const updateCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    // console.log(id, updatedData);    
    const result = await foodService(id, updatedData);
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

    const result = await foodService(id);
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
