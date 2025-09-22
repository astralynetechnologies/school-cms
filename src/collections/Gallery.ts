import { CollectionConfig } from "payload";

export const Gallery: CollectionConfig = {
  slug: "gallery",
  admin: {
    useAsTitle: "title",
    group: "Media and Gallery",
    defaultColumns: ["title", "type", "media", "createdAt"],
  },
  access: {
    read: () => true, // everyone can see
    create: ({ req }) => !!req.user, // only admins can add
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Photo", value: "photo" },
        { label: "Video", value: "video" },
      ],
      defaultValue: "photo",
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media", // This assumes you have Payload's built-in media collection enabled
      required: true,
    },
  ],
};
