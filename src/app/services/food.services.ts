// import ApiError from "../../../errors/ApiError";
import { SortOrder } from "mongoose";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { ICows, IFilters } from "./cows.interface";
import { Cows } from "./cows.model";
import ApiError from "../../../errors/ApiError";
import { IFood } from "../interface/food.interface";
import { Food } from "../models/food.model";

export const getFoods = async () => {
  const data = await Food.find();
  return data;
};

export const createFood = (payload: any): Promise<IFood> => {
  const results = Food.create(payload);
  // console.log(results);

  // if(!results){
  //     throw new ApiError(400,'Failed to create Cows');
  // }
  return results;
};

export const getSingleFood = (payload: string) => {
  const data = Food.find({ _id: payload });
  //   console.log(data);
  return data;
};
export const updateFood = async (id: string, payload: any) => {
  // console.log(userData);
  const cowData = await Food.findOne({ _id: id });

  return cowData;
};

export const deleteFood = async (id: string, userData: any) => {
    const data = await Food.findOneAndDelete(
      { _id: id },
      {
        new: true,
      }
    );
    return data;
};
