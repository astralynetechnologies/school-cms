import { CollectionConfig } from "payload";

export const Secondary: CollectionConfig = {
    slug: "secondary",
    labels: {
        singular: "Secondary",
        plural: "Secondary",
    },  
    admin: {
        useAsTitle: "title",
        group: "Academics",
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
                description: "Title of the secondary page",
            },
        },
        {
            name:"subtitle",
            type:"text",
            required:true,
            admin:{
                description:"Subtitle for the secondary section",   
            },
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
            admin: {
                description: "Upload an image for the secondary section",
            },
        },      
        {
            name: 'content',
            type: 'textarea',   
            required: true,
            admin: {    
                description: 'Detailed description of the secondary curriculum',
            },
        },
    ],
};