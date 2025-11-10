import { CollectionConfig } from "payload";

export const SeniorSecondary: CollectionConfig = {
    slug: "senior-secondary",
    labels: {
        singular: "Senior Secondary",
        plural: "Senior Secondary",
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
                description: "Title of the senior secondary page",
            },
        },
        {
            name:"subtitle",
            type:"text",
            required:true,
            admin:{
                description:"Subtitle for the senior secondary section",
            },  
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
            admin: {
                description: "Upload an image for the senior secondary section",
            },
        },      
        {
            name: 'content',
            type: 'textarea',   
            required: true,
            admin: {    
                description: 'Detailed description of the senior secondary curriculum',
            },
        },
    ],
};