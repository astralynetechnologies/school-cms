// collections/PTA.ts
import { CollectionConfig } from 'payload';

export const PTA: CollectionConfig = {
  slug: 'pta',
  labels: {
    plural: 'Associations'
  },
  admin: {
    useAsTitle: 'name',
    group: "About School",
    defaultColumns: ['name', 'role', 'isExecutive', 'order', 'academicYear'],
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
      name: 'role',
      type: 'select',
      required: true,
      options: [
        { label: 'President, PTA', value: 'president-pta' },
        { label: 'Chairman, Sree Buddha Foundation', value: 'chairman-foundation' },
        { label: 'Secretary, Sree Buddha Foundation', value: 'secretary-foundation' },
        { label: 'Secretary, PTA', value: 'secretary-pta' },
        { label: 'Principal', value: 'principal' },
        { label: 'Vice Principal', value: 'vice-principal' },
        { label: 'Headmistress', value: 'headmistress' },
        { label: 'Teacher', value: 'teacher' },
        { label: 'Member', value: 'member' }
      ],
      defaultValue: 'member',
    },
    {
      name: 'isExecutive',
      type: 'checkbox',
      label: 'Executive Committee Member',
      defaultValue: false,
      admin: {
        description: 'Check if this member is part of the executive committee',
      },
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
      admin: {
        description: 'Phone number (optional)',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 999,
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
    {
      name: 'academicYear',
      type: 'text',
      required: true,
      defaultValue: '2024-25',
      admin: {
        description: 'Academic year for this PTA committee (e.g., 2024-25)',
      },
    },
  ],
};

export default PTA;