import { CollectionConfig } from "payload";

export const Playground: CollectionConfig = {
    slug: "playground",
    labels: {
        plural: "Playground Area",
        singular: "Playground Area",
        },
    admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    group: 'Facilities',
    },
    access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user), // Only authenticated users can create
    update: ({ req: { user } }) => Boolean(user), // Only authenticated users can update
    delete: ({ req: { user } }) => Boolean(user), // Only authenticated users can delete
    },
    fields: [
    {
      name: 'title',
      type: 'text',
        required: true,
        admin: {
        description: 'The main heading for the Playground section',
        },
    },
    {
        name: 'subtitle',
        type: 'textarea',
        required: true,
        defaultValue: 'A Safe and Fun Environment for Children to Play and Explore',
        admin: {
        description: 'The subtitle text below the main heading',
        },
    },
    {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
        required: true,
        admin: {
        description: 'Upload an image for the Playground section',
        },
    },
    {
        name: 'content',
        type: 'textarea',
        label: 'Content Paragraphs',
        required: true,
        admin: {
        description: 'Describe the Playground area, its features, and benefits to students...',
        rows: 6,
        placeholder: 'Add detailed information about the Playground area here...',
        },
    },
    ],
};
