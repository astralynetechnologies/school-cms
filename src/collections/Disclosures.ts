import { CollectionConfig } from 'payload';

const Disclosure: CollectionConfig = {
  slug: 'disclosure',
  admin: {
    useAsTitle: 'fileName',
    group: "Documents",
    defaultColumns: ['fileName', 'document', 'updatedAt'],
  },
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      name: 'fileName',
      type: 'text',
      required: true,
      label: 'File Name',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
    },
    {
      name: 'document',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Document File',
      filterOptions: {
        mimeType: { contains: 'application' }, // Restrict to document files
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Show this document on the website',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
      admin: {
        description: 'Lower numbers appear first',
      },
    },
  ],
  timestamps: true,
};

export default Disclosure;