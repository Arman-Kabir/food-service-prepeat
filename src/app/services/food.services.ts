// import ApiError from "../../../errors/ApiError";
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
  const result = await Food.findOne({ _id: id });

  return result;
};

export const deleteFood = async (id: string) => {
    const data = await Food.findOneAndDelete(
      { _id: id },
      {
        new: true,
      }
    );
    return data;
};

export const foodService={
    getFoods,
    getSingleFood,
    createFood,
    updateFood,
    deleteFood
}