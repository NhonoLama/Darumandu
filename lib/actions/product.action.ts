"use server"

import { LATEST_PRODUCT_LIMIT } from "../constants";
import {prisma} from "@/db/prisma"
import { convertToObject } from "../utils";

export async function getLatestProducts(){
    const data =await prisma.product.findMany({
        take: LATEST_PRODUCT_LIMIT || 4,
        orderBy: {createdAt: "desc"}
    })

    return convertToObject(data);
}

export async function getProductBySlug(slug:string) {
    return await prisma.product.findFirst({where:{slug: slug}});
}