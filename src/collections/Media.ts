import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: "Media and Gallery"
  },
  upload: true,
  access: {
    // 👇 allow public read access so photo expands into an object
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: false,
    },
  ],
};
