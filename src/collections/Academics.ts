import type { CollectionConfig } from 'payload'

const Academics: CollectionConfig = {
  slug: 'academics',
  labels: {
    singular: 'Academic Facility',
    plural: 'Academic Facilities',
  },
  access: {
    read: () => true, // Public read access
    create: ({ req: { user } }) => Boolean(user), // Only authenticated users can create
    update: ({ req: { user } }) => Boolean(user), // Only authenticated users can update
    delete: ({ req: { user } }) => Boolean(user), // Only authenticated users can delete
  },
  admin: {
    useAsTitle: 'title',
    group:'Curriculum',
    defaultColumns: ['title', 'updatedAt'],
    description: 'Manage academic facilities and labs showcased on the website',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Facility Title',
      required: true,
      admin: {
        placeholder: 'e.g., ATAL Tinkering Lab, Computer Lab',
      },
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Facility Image',
      relationTo: 'media', // Assumes you have a media collection
      required: true,
      admin: {
        description: 'Upload an image representing this academic facility',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      admin: {
        rows: 6,
        placeholder: 'Describe the academic facility, its purpose, and benefits to students...',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      admin: {
        description: 'Control the order in which facilities appear (lower numbers appear first)',
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

export default Academics