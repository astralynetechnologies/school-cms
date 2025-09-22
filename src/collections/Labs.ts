import type { CollectionConfig } from 'payload'

const Labs: CollectionConfig = {
  slug: 'labs',
  labels: {
    plural: 'Lab Facilities',
    singular: 'Lab',
  },
  access: {
    read: () => true, // Public read access
    create: ({ req: { user } }) => Boolean(user), // Only authenticated users can create
    update: ({ req: { user } }) => Boolean(user), // Only authenticated users can update
    delete: ({ req: { user } }) => Boolean(user), // Only authenticated users can delete
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    description: 'Manage lab facilities and labs showcased on the website',
    group:'Curriculum',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Lab Title',
      required: true,
      admin: {
        placeholder: 'e.g., ATAL Tinkering Lab, Computer Lab',
      },
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Lab Image',
      relationTo: 'media', // Assumes you have a media collection
      required: true,
      admin: {
        description: 'Upload an image representing this Lab facility',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      admin: {
        rows: 6,
        placeholder: 'Describe the Lab facility, its purpose, and benefits to students...',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      admin: {
        description: 'Control the order in which Labs appear (lower numbers appear first)',
        step: 1,
      },
      defaultValue: 1,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Uncheck to hide this facility from the website',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-generate order if not provided
        if (!data.order) {
          data.order = Date.now()
        }
        return data
      },
    ],
  },
}

export default Labs