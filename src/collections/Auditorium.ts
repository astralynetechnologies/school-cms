import { CollectionConfig } from "payload";

export const Auditorium: CollectionConfig = {
    slug: "auditorium",
    labels: {
        singular: "Auditorium",
        plural: "auditorium",
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
                description: "Title of the auditorium page",
            },
        },
        {
            name:"subtitle",
            type:"text",
            required:true,
            admin:{
                description:"Subtitle for the auditorium section",
            },
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
            admin: {
                description: "Upload an image for the auditorium section",
            },
        },
        {
            name: 'seating capacity',
            type: 'number',
            required: true,
            admin: {
                description: 'Seating capacity of the auditorium',
            },
        },
        {
            name: 'content',
            type: 'textarea',
            required: true,
            admin: {
                description: 'Detailed description of the auditorium facilities',
            },
        },
    ],
};