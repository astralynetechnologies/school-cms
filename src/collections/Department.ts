import { CollectionConfig } from "payload";

export const Department: CollectionConfig = {
    slug: "departments",
    labels: {
        singular: "Department",
        plural: "Departments",  
    },
    admin: {
        useAsTitle: "name",
        group: "About School",
    },
    access: {
        read: () => true,
        create: ({ req: { user } }) => Boolean(user), // Only authenticated users can create
        update: ({ req: { user } }) => Boolean(user), // Only authenticated users can update
        delete: ({ req: { user } }) => Boolean(user), // Only authenticated users can delete
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
            admin: {
                description: "Name of the department",
            },
        },
        {
            name: "icon",  
            type: "text",
            required: false,
            admin: {
                description: "Icon class for the department (e.g., FontAwesome class)",
            },
        },
        {
            name: "image",  
            type: "upload",
            relationTo: "media",
            required: true,
            admin: {
                description: "Upload an image representing the department",
            },
        },
        {
            name:"description",
            type:"textarea",
            required:true,
            admin:{
                description:"Description of the department",
            },
        },
        {
            name: "No of Faculty",
            type: "number",
            required: true,
            admin: {
                description: "Total number of faculty members in the department",
            },
        },
        {
            name: "staff",
            type: "array",
            label: "Faculty Members",
            minRows: 1,
            fields: [
                {
                    name: "Name",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Name of the faculty member",
                    },
                },
                {
                    name: "Position",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Position or title of the faculty member",
                    },
                },
                {
                    name: "Photo",
                    type: "upload",
                    relationTo: "media",
                    required: false,
                    admin: {
                        description: "Upload a photo of the faculty member",
                    },
                }
            ],
        
        },
        {
            name: "staff image",
            type: "upload",
            relationTo: "media",
            required: false,
            admin: {
                description: "Upload images of faculty members",
            },
        },
        {
            name: "displayOrder",
            type: "number",
            required: true,
            admin: {
                description: "Display order of the department",
            },
        }
    ],
};