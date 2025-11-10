import { CollectionConfig } from "payload";

export const Clubs: CollectionConfig = {
    slug: "clubs",
    labels: {
        singular: "Club",
        plural: "Clubs",
    },
    admin: {
        useAsTitle: "title",
        group: "non-Academic",
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
                description: "Title of the club",
            },
        },
        {
            name:"description",
            type:"textarea",
            required:true,
            admin:{
                description:"Description of the club activities",   
            },
        },
        {
            name: "image",  
            type: "upload",
            relationTo: "media",
            required: true,
            admin: {
                description: "Upload an image representing the club",
            },
        },      
    ],
};