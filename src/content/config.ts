import { defineCollection, z } from "astro:content";

const daysCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date()
    })
})

export const collections = {
    days: daysCollection
}