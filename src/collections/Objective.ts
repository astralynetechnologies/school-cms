import { CollectionConfig } from 'payload';

const Objectives: CollectionConfig = {
  slug: 'objectives',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    group: 'About Foundation',
  },
  access: {
    read: () => true, // Public read access
    create: ({ req: { user } }) => Boolean(user), // Only authenticated users can create
    update: ({ req: { user } }) => Boolean(user), // Only authenticated users can update
    delete: ({ req: { user } }) => Boolean(user), // Only authenticated users can delete
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Aims & Objectives',
      admin: {
        description: 'The main heading for the objectives section',
      },
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      defaultValue: 'Discover our vision and mission, clearly outlining our goals and the steps we take to achieve them.',
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
        description: 'Upload an image for the objectives section',
      },
    },
    {
      name: 'content',
      type: 'array',
      label: 'Content Paragraphs',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Add a paragraph of content',
          },
        },
      ],
      defaultValue: [
        {
          paragraph: 'The Sree Buddha Foundation envisions fostering education rooted in the timeless values of kindness, Humanism, and Equality, inspired by the teachings of the Buddha. These guiding principles will shape every aspect of our institutions, from the Central School in Karunagappally to the Sree Buddha College of Engineering, Pattoor. Our mission is to blend these cherished ideals with the scientific spirit of the modern age, encouraging rational thinking and a compassionate outlook.',
        },
        {
          paragraph: 'We believe education is far more than a path to a career – it is a journey towards the holistic development of an individual. It should nurture ethical idealism, preserve our rich cultural heritage, and foster the integrated growth of body, mind, and emotions to create balanced, well-rounded personalities.',
        },
        {
          paragraph: 'Through a carefully planned daily routine, we aim to cultivate not only knowledge but also moral strength, spiritual depth, and intellectual curiosity. By offering ample opportunities in academics, arts, sports, and co-curricular activities, the school encourages healthy competition while granting pupils the freedom to explore, express, and evolve into confident, responsible individuals.',
        },
      ],
      admin: {
        description: 'Add multiple paragraphs of content for the objectives section',
      },
    },
  ],
  timestamps: true,
};

export default Objectives;