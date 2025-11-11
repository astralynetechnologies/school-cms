import { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    group: "non-Academic",
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
    { 
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "Title of the event",
      },
    },
    { 
      name: "content", 
      type: "textarea", 
      required: true,
      admin: {
        description: "description of the event",
      },
    },
    { 
      name: "category",
      type: "select", 
      required: true,
      options: ["Sports", "Cultural", "Academic", "Other"],
      admin: {
        description: "Category of the event (e.g., Sports, Cultural, Academic)",
      },
    },
    { 
      name: "publishDate", 
      type: "date", 
      admin: { date: {displayFormat: 'dd-MM-yyyy'}}
    }, 
    {
      name: "images", 
      type: "upload", 
      relationTo : "media",
      admin: {
        description: "Upload images related to the event",
      },
    },
  ],
};
