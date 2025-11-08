import { CollectionConfig } from "payload";

export const Conferencehall: CollectionConfig = {
    slug: "conferencehall",
    labels: {
        singular: "Conference Hall",
        plural: "Conference Halls",
    },
    admin: {
        useAsTitle: "title",
        group: "Facilities",
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
                description: "Title of the conference hall page",
            },

        },
        {
            name:"subtitle",
            type:"text",
            required:true,
            admin:{
                description:"Subtitle for the conference hall section",
            },
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
            admin: {
                description: "Upload an image for the conference hall section",
            },
        },
        {
            name: 'content',
            type: 'textarea',
            required: true,
            admin: {
                description: 'Detailed description of the conference hall facilities',
            },
        },
    ],
};
            
