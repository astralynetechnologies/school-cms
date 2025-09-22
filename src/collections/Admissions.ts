import { CollectionConfig } from "payload";

const Admissions: CollectionConfig = {
  slug: "admissions",
  admin: {
    useAsTitle: "studentName",
    group: "Admissions & Enquiries",
  },
  access: {
    create: () => true,
    // read: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: "studentName",
      type: "text",
      required: true,
    },
    {
      name: "classAdmission",
      type: "text",
      required: true,
    },
    {
      name: "gender",
      type: "select",
      options: ["male", "female", "other"],
      required: true,
    },
    {
      name: "dateOfBirth",
      type: "date",
      required: true,
      admin: {
        date: {
          displayFormat: 'MM-dd-yyyy',
        },
      },
      hooks: {
        afterRead: [
          ({ value }) => {
            if (!value) return value;
            const d = new Date(value);
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            const yyyy = d.getFullYear();
            return `${mm}-${dd}-${yyyy}`;
          }
        ]
      }
    },
    {
      name: "ageOn31stMay",
      type: "number",
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "presentAddress",
      type: "textarea",
    },
    {
      name: "permanentAddress",
      type: "textarea",
    },
    {
      name: "fatherName",
      type: "text",
    },
    {
      name: "motherName",
      type: "text",
    },
    {
      name: "contactNo",
      type: "text",
    },
    {
      name: "schoolPreviouslyAttended",
      type: "text",
    },
    {
      name: "specialRequests",
      type: "textarea",
    },
  ],
};

export default Admissions;