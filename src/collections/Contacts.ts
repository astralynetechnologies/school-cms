import { CollectionConfig } from "payload";

const Contacts: CollectionConfig = {
  slug: "contacts",
  admin: {
    useAsTitle: "studentName",
    group: "Admissions & Enquiries",
  },
  access: {
    create: () => true, // anyone (public) can submit the form
    read: ({ req }) => !!req.user, // only admins can read
    update: ({ req }) => !!req.user, // only admins can update
    delete: ({ req }) => !!req.user, // only admins can delete
  },
  fields: [
    {
      name: "studentName",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "message",
      type: "textarea",
    },
  ],
};

export default Contacts;
