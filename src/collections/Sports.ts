import { CollectionConfig } from "payload";

export const Sports: CollectionConfig = {
  slug: "sports",
  labels: {
    plural: "Sports Room",
    singular: "Sports Room",
  },
    admin: {
    useAsTitle: "title",
    group: "Facilities",
  },
    access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user), // Only authenticated users can create
    update: ({ req: { user } }) => Boolean(user), // Only authenticated users can update
    delete: ({ req: { user } }) => Boolean(user), // Only authenticated users can delete
    },
    fields: [
    {
      name: "title",
      type: "text",
        required: true,
        admin: {
        description: "Title of the sports page",
        },
    },
    {
      name: "image",
      type: "upload",
        relationTo: "media",
        required: true,
        admin: {
        description: "Upload an image for the sports section",
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
          paragraph: 'The Pre-Primary Section at Sree Buddha Central School is a magical world of wonder where every day is an adventure in learning. Designed specifically for children aged 2.5 to 5 years, our program creates a warm, nurturing environment that feels like a home away from home. Through carefully crafted activities that blend play with education, we help little learners discover their potential while building essential social, emotional, and cognitive skills.',
        },
        {
          paragraph: 'Our specially trained educators understand that early childhood is a critical period for brain development. Using the internationally recognized play-way method, we engage children through hands-on activities, storytelling, music, art, and movement. Each day is filled with joyful experiences that spark curiosity, encourage exploration, and develop a lifelong love for learning. Our child-centric approach ensures that every student progresses at their own pace in a stress-free atmosphere.',
        },
        {
          paragraph: 'The vibrant, colorful classrooms are thoughtfully designed with age-appropriate furniture, sensory play areas, reading corners, and interactive learning zones. We maintain small class sizes to ensure individual attention, and our comprehensive curriculum covers language development, numeracy skills, motor skills, creative expression, and social-emotional learning, preparing children seamlessly for formal schooling while keeping the joy of childhood intact.',
        },
      ],
      admin: {
        description: 'Add multiple paragraphs of content for the Pre Primary section',
      },
    },   
    ],
};
