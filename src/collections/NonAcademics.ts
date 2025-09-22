import { CollectionConfig } from 'payload';

const NonAcademics: CollectionConfig = {
  slug: 'nonacademics',
  labels: {
    singular: 'Non-Academic Activity',
    plural: 'Non-Academic Activities',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'isActive', 'updatedAt'],
    group: 'Curriculum',
  },
  access: {
    read: () => true, // Public read access for frontend
    create: ({ req: { user } }) => Boolean(user), // Only authenticated users can create
    update: ({ req: { user } }) => Boolean(user), // Only authenticated users can update
    delete: ({ req: { user } }) => Boolean(user), // Only authenticated users can delete
  },
  fields: [
    {
      name: 'title',
      label: 'Activity Title',
      type: 'text',
      required: true,
      maxLength: 100,
      admin: {
        description: 'The title of the non-academic activity (e.g., Sports & Games, Music, etc.)',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Detailed description of the activity. This will be shown when the section is expanded.',
        rows: 4,
      },
    },
    {
      name: 'isActive',
      label: 'Is Active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this activity should be displayed on the website.',
        position: 'sidebar',
      },
    },
    {
      name: 'sortOrder',
      label: 'Sort Order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order in which this activity appears on the page (lower numbers appear first).',
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
};

export default NonAcademics;