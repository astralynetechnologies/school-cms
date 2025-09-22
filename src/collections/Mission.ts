import { CollectionConfig } from 'payload';

const Mission: CollectionConfig = {
  slug: 'mission',
  labels: {
    plural: "Mission & Vission"
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    group: 'About School',
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
      defaultValue: 'Mission & Vission',
      admin: {
        description: 'The main heading for the Mission & Vission section',
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
        description: 'Upload an image for the section',
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
          paragraph: 'The cardinal points of the teaching of Lord Buddha viz Kindness, Humanism and Equality, is the guiding Philosophy of this institution. Special efforts are made, to inculcate these cherished values into the minds of the pupils. The scientific temper of the Buddhist teachings and its rationality are in perfect harmony with the scientific spirit of the modern age. The purpose of education is not merely training a child for a career to earn his livelihood. Education should aim at the all round development of the individual and help him to become inheritor of our cultural heritage. Education should inculcate ethical idealism and try to bring out, what is within. There should be an integrated growth of the body, mind and emotions, so as to become a balanced personality. The school strives to achieve these aims by planning the daily routine of the institution. A sense of competitive spirit is essential to excel in this age. The school provides ample opportunities for the pupil’s physical, intellectual, moral and spiritual growth. Absolute freedom is given to the pupils for the development of the personality.',
        },
        {
          paragraph: 'The Sree Buddha Foundation aims at providing quality education at various levels. After the establishment of the Central School in Karunagappally, Sree Buddha College of Engineering, Pattoor came into existence under the sponsorship of the foundation. Later, two more institutions viz.,  Sree  Buddha College of Engineering for women, Elavumthitta and Sree Buddha Central School, Pattoor were also established.',
        },
      ],
      admin: {
        description: 'Add multiple paragraphs of content for the section',
      },
    },
  ],
  timestamps: true,
};

export default Mission;