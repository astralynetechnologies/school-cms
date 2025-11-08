import { CollectionConfig } from "payload";

export const Atl: CollectionConfig = {
  slug: "atl",
  labels: {
    plural: "ATL Room",
    singular: "ATL Room",
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
        description: "Title of the ATL page",
        },
    },
    {
        name: "subtitle",
        type: "text",
        required: true,
        admin: {
        description: "Subtitle for the ATL section",
        },
    },
    {
        name: "image",
        type: "upload",
        relationTo: "media",
        required: true,
        admin: {
        description: "Upload an image for the ATL section",
        },
    },
    {
        name: 'content',
        type: 'textarea',
        required: true,
        admin: {
        description: 'Detailed description of the ATL facilities',
        },
    },
    ],
};
    