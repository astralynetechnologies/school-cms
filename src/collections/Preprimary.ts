import { CollectionConfig } from "payload";

export const Preprimary: CollectionConfig = {
    slug: "preprimary",
    labels: {
        singular: "Preprimary",
        plural: "Preprimary",   
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
                description: "Title of the preprimary page",
            },
        },
        {
            name:"subtitle",
            type:"text",
            required:true,
            admin:{
                description:"Subtitle for the preprimary section",
            },  
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
            admin: {
                description: "Upload an image for the preprimary section",
            },
        },      
        {
            name: 'content',
            type: 'textarea',   
            required: true,
            admin: {    
                description: 'Detailed description of the preprimary curriculum',
            },
        },
    ],
};