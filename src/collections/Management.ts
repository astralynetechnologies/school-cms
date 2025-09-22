// collections/Management.ts
import { CollectionConfig } from 'payload';

export const Management: CollectionConfig = {
  slug: 'management',
  admin: {
    useAsTitle: 'name',
    group: "About Foundation",
    defaultColumns: ['name', 'designation', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'designation',
      type: 'select',
      required: true,
      options: [
        { label: 'Chairman', value: 'chairman' },
        { label: 'Secretary', value: 'secretary' },
        { label: 'Joint Secretary', value: 'joint-secretary' },
        { label: 'Treasurer', value: 'treasurer' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: {
        description: 'Display order (1-4)',
      },
      min: 1,
      max: 4,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};

export default Management;