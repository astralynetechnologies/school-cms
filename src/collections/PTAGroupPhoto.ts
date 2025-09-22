// collections/PTAGroupPhoto.ts
import { CollectionConfig } from 'payload';

export const PTAGroupPhoto: CollectionConfig = {
  slug: 'pta-group-photo',
  admin: {
    useAsTitle: 'title',
    group: "About School",
    defaultColumns: ['title', 'academicYear', 'isActive'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'PTA Executive Committee Group Photo',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'academicYear',
      type: 'text',
      required: true,
      defaultValue: '2024-25',
      admin: {
        description: 'Academic year for this group photo',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active Photo',
      defaultValue: true,
      admin: {
        description: 'Check if this is the current active group photo to display',
      },
    },
  ],
};

export default PTAGroupPhoto;