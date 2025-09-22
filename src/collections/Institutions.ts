import { CollectionConfig } from "payload";

const Institution: CollectionConfig = {
  slug: "institutions",
  admin: {
    useAsTitle: "name",
    group: "About Foundation",
    description: "Manage partner institutions and organizations",
  },
  access: {
     read: () => true, // Public read access
    create: ({ req: { user } }) => Boolean(user), // Only authenticated users can create
    update: ({ req: { user } }) => Boolean(user), // Only authenticated users can update
    delete: ({ req: { user } }) => Boolean(user), // Only authenticated users can delete
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Institution Name",
      required: true,
      maxLength: 100,
      index: true, // Better search performance
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Institution Image",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true,
      maxLength: 500,
    },
    {
      name: "website",
      type: "text",
      label: "Website URL",
      validate: (value : any) => {
        if (!value) return true; // Optional field
        const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        return urlRegex.test(value) || 'Please enter a valid URL';
      },
    },
  ],
};

export default Institution;