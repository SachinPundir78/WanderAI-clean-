import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    UserTable: defineTable({
        name: v.string(),
        imageURL: v.string(),
        email: v.string(),
        subscription: v.optional(v.string()),
    }),

    TripDetailTable: defineTable({
        trip_id: v.string(),
        tripDetail: v.any(),
        uid:v.id('UserTable'),
    }),
});
