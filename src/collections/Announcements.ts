import { CollectionConfig } from "payload";

export const Announcements: CollectionConfig = {
  slug: "announcements",
  admin: {
    group: "Announcement and Events",
    useAsTitle: "title",
  },
  access: {
    // 👇 Allow anyone (even unauthenticated users) to read announcements
    read: () => true,
    // Keep writing restricted (so only admins can add/edit)
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "content", type: "textarea", required: true },
    { name: "publishDate", type: "date" }, 
  ],
};
