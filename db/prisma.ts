
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@/lib/generated/prisma";
import ws from "ws";

// Sets up WebSocket connections, which enables Neon to use WebSocket communication.
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.NEXT_PUBLIC_DATABASE_URL}`;
if (!connectionString) {
  throw new Error("Missing DATABASE_URL environment variable");
}

// Instantiates the Prisma adapter using the Neon connection string to handle the connection between Prisma and Neon.
// const pool = new Pool({ connectionString });
const adapter = new PrismaNeon({connectionString});

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
