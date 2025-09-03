import arcjet, { tokenBucket, ArcjetNext } from "@arcjet/next";

export const aj: ArcjetNext<{ requested: number; userId: string }> = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    tokenBucket({
      mode: "LIVE",
      characteristics: ["userId"],
      refillRate: 10,
      interval: 86400,
      capacity: 30,
    }),
  ],
});
