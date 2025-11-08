import { CollectionConfig } from "payload";

export const Library: CollectionConfig = {
    slug: "library",
    labels: {
        singular: "Library",
        plural: "Libraries",
    },
    admin: {
        useAsTitle: "title",
        group: "Facilities",
    },
    access: {
        read: () => true,
        create: ({ req: { user } }) => Boolean(user), // Only authenticated users can create
        update: ({ req: { user } }) => Boolean(user), // Only authenticated users can update
        delete: ({ req: { user } }) => Boolean(user), // Only authenticated users can delete
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
            admin: {
                description: "Title of the library page",
            },
        },
        {
            name:"subtitle",
            type:"text",
            required:true,
            admin:{
                description:"Subtitle for the library section",
            },
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
            admin: {
                description: "Upload an image for the library section",
            },
        },      
        {
            name: 'content',
            type: 'textarea',   
            required: true,
            admin: {
                description: 'Detailed description of the library facilities',
            },
        },
    ],
};