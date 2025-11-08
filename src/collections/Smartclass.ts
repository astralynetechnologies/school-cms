import { CollectionConfig } from "payload";

export const Smartclass: CollectionConfig = {
    slug: "smartclass",
    labels: {
        singular: "Smart Class",
        plural: "Smart Classes",
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
                description: "Title of the smart class page",
            },
        },
        {
            name:"subtitle",
            type:"text",
            required:true,
            admin:{
                description:"Subtitle for the smart class section",
            },
        },              
        {
            name: "image",
            type: "upload", 
            relationTo: "media",
            required: true,
            admin: {
                description: "Upload an image for the smart class section",
            },
        },  
        {
            name: 'content',
            type: 'textarea',
            required: true,
            admin: {
                description: 'Detailed description of the smart class facilities',
            },
        },
    ],
};