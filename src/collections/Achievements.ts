import { CollectionConfig } from "payload";

export const Achievements: CollectionConfig = {
  slug: "achievements",
  labels: {
    singular: "Achievement",
    plural: "Achievements",
  },
  admin: {
    group: "Achievements",
    useAsTitle: "title",
  },
  access: {
    // 👇 Allow anyone (even unauthenticated users) to read announcements
    read: () => true,
    // Keep writing restricted (so only admins can add/edit)
    // create: ({ req }) => !!req.user,
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "content", type: "textarea", required: true },
    { name: "publishDate", type: "date", admin: { date: {displayFormat: 'dd-MM-yyyy'}}}, 
  ],
};
