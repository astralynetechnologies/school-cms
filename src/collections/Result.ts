import { CollectionConfig } from "payload";

export const Result: CollectionConfig = {
    slug: "result",
    labels: {
        singular: "Result",
        plural: "Results",
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
                description: "Title of the result page",
            },
        },
        {
            name:"description",
            type:"text",
            required:true,
            admin:{
                description:"Description for the result section",
            },  
        },
        {
            name: "document",
            type: "upload",
            relationTo: "media",
            required: true,
            admin: {        
                description: "Upload the result document",
            },
        },      
    ],
};