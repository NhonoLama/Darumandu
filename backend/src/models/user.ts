import { Schema, model } from "mongoose";

export interface Iuser{
    _id?: string;
    username: string;
    password: string;
    availableMoney: number;
    purchasedItems: string[]; 
}

const userSchema = new Schema<Iuser>({
    username: {type: String, required:true, unique: true},
    password: {type:String, required:true},
    availableMoney: {type:Number, default: 500},
    purchasedItems: [{type:Schema.Types.ObjectId, ref: "product",default:[]}]
})

export const UserModel = model<Iuser>('user',userSchema)