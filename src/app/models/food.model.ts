import { Schema, model } from "mongoose";
import { IFood } from "../interface/food.interface";
// import { ICows } from "./cows.interface";
// import { Breed, Category, Label, Location } from "./cows.constant";

const FoodSchema = new Schema<IFood>(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            
        },
        location: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },

        label: {
            type: String,       
            required: true
        },
        category: {
            type: String,           
            required: true
        },
        chef: {
            type: String,           
            required: true
        },

    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);

// 3. Create a Model.
export const Food = model<IFood>("Food", FoodSchema);
