// used for storing already happened events
import { CollectionConfig } from "payload";
import { Sports } from "./Sports";

export const Event: CollectionConfig = {
    slug: "event",
    labels: {
        singular: "Event",
        plural: "Events",
    },
    admin: {
        useAsTitle: "title",
        group: "Events",
    },
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        // create: ({ req: { user } }) => Boolean(user), // Only authenticated users can create
        // update: ({ req: { user } }) => Boolean(user), // Only authenticated users can update
        delete: ({ req: { user } }) => Boolean(user), // Only authenticated users can delete
    },
    fields: [
        {
            name: "title",
            type: "text",   
            required: true,
            admin: {
                description: "Title of the event",
            },      
        },
        {
            name: "date",
            type: "date",
            required: true,
            admin: {
                description: "Date of the event",
            },
        },
        {
            name: "year",
            type: "number",
            required: true,
        },
        {
            name: "category",
            type: "select",
            options: ["Sports", "Cultural", "Academic", "Other"],
            required: true,
            admin: {
                description: "Category of the event",
            },
        },
        {
            name: "description",
            type: "textarea",
            required: true,
            admin: {
                description: "Detailed description of the event",
            },
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: false,
            admin: {
                description: "Upload an image for the event (optional)",
            },
        },
    ],
};