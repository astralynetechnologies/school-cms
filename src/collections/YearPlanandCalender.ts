import { CollectionConfig } from "payload";

export const YearPlanandCalender: CollectionConfig = {
    slug: "year-plan-and-calender",
    labels: {
        singular: "Year Plan and Calender",
        plural: "Year Plan and Calenders",
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
                description: "Title of the year plan and calender page",
            },
        },
        {
            name:"description",
            type:"text",
            required:true,
            admin:{ 
                description:"Description for the year plan and calender section",
            },
        },
        {
            name: "document",
            type: "upload",
            relationTo: "media",
            required: true,
            admin: {
                description: "Upload the year plan and calender document",
            },
        },      
    ],
};