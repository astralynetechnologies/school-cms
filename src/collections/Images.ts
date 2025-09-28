import { CollectionConfig } from "payload";

export const Images: CollectionConfig = {
  slug: "image",
  labels: {
    singular: "Image",
    plural: "Home Page Images",
  },
  admin: {
    useAsTitle: "photo",
    group: "Media and Gallery",
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
