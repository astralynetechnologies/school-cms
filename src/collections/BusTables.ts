// collections/BusTables.ts
import { CollectionConfig } from "payload";

const BusTables: CollectionConfig = {
  slug: "bus-tables",
  admin: {
    useAsTitle: "title",
    group: "Transport",
    defaultColumns: ["title", "createdAt", "updatedAt"],
    description: "Manage college bus schedules and routes",
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
      admin: {
        description: "e.g. 'Bus No.1 (2024-25)' or 'Route A - City Center'"
      }
    },
    {
      name: "routeDescription",
      type: "textarea",
      admin: {
        description: "Optional description of the bus route"
      }
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description: "Whether this bus route is currently active"
      }
    },
    {
      name: "stops",
      type: "array",
      required: true,
      minRows: 1,
      admin: {
        description: "Bus stops with timings and fare information"
      },
      fields: [
        { 
          name: "stop", 
          type: "text", 
          required: true,
          admin: {
            description: "Name of the bus stop location"
          }
        },
        { 
          name: "morning", 
          type: "text",
          admin: {
            description: "Morning departure time (e.g. '7:30 AM')",
            placeholder: "e.g. 7:30 AM"
          }
        },
        { 
          name: "evening", 
          type: "text",
          admin: {
            description: "Evening departure time (e.g. '5:30 PM')",
            placeholder: "e.g. 5:30 PM"
          }
        },
        { 
          name: "amount", 
          type: "number",
          min: 0,
          admin: {
            description: "Fare amount in rupees",
            placeholder: "Enter amount without ₹ symbol"
          }
        },
        {
          name: "notes",
          type: "text",
          admin: {
            description: "Optional notes for this stop (e.g. 'Saturday only')"
          }
        }
      ],
    },
    {
      name: "academicYear",
      type: "text",
      admin: {
        description: "Academic year this schedule applies to (e.g. '2024-25')"
      }
    },
    {
      name: "effectiveFrom",
      type: "date",
      admin: {
        description: "Date from which this schedule is effective"
      }
    },
    {
      name: "effectiveTo",
      type: "date",
      admin: {
        description: "Date until which this schedule is valid"
      }
    }
  ],
  
  // Add timestamps
  timestamps: true,
  
  // Add hooks for additional functionality
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-generate academic year if not provided
        if (!data.academicYear) {
          const currentYear = new Date().getFullYear();
          const nextYear = currentYear + 1;
          data.academicYear = `${currentYear}-${nextYear.toString().slice(-2)}`;
        }
        return data;
      }
    ]
  }
};

export default BusTables;