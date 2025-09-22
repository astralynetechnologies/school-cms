// collections/ExecutiveCommittee.ts
import { CollectionConfig } from 'payload';

export const ExecutiveCommittee: CollectionConfig = {
  slug: 'executive-committee',
  admin: {
    useAsTitle: 'name',
    group: "About School",
    defaultColumns: ['name', 'title', 'order'],
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
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: {
        description: 'Display order',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};

export default ExecutiveCommittee;