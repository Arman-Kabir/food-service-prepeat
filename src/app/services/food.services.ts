import { IFood } from "../interface/food.interface";
import { Food } from "../models/food.model";

export const getFoods = async () => {
  const data = await Food.find();
  return data;
};

export const createFood = (payload: any): Promise<IFood> => {
  const results = Food.create(payload);
  return results;
};

export const getSingleFood = (payload: string) => {
  const data = Food.find({ _id: payload });
  return data;
};
export const updateFood = async (id: string, payload: any) => {
  const result = await Food.updateOne({ _id: id },{$set:payload});
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