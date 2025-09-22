import { CollectionConfig } from "payload";

export const Leaders: CollectionConfig = {
  slug: "leaders",
  labels: {
    plural: "Chairman & Principal Messages"
  },
  admin: {
    useAsTitle: "name",
    group: "About School",
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
    { name: "name", type: "text", required: true },
    { name: "message", type: "textarea", required: true },
    {name: "images", type: "upload", relationTo : "media"},
  ],
};
