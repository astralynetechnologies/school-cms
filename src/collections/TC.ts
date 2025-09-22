import { CollectionConfig } from 'payload';

const TC: CollectionConfig = {
  slug: 'tc',
  labels: {
    singular: 'TC Certificate',
    plural: 'TC Certificates',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'file', 'updatedAt'],
    group: 'Documents',
  },
  access: {
    read: () => true, // everyone can see
    create: ({ req }) => !!req.user, // only admins can add
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Title for this TC certificate (e.g., "TC Certificate Format 2024")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Description of what this TC certificate is for',
      },
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload the TC certificate PDF file',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show this TC certificate on the website',
      },
    },
  ],
  timestamps: true,
};

export default TC;