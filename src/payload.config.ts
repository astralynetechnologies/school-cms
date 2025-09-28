import { buildConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";
import { postgresAdapter } from '@payloadcms/db-postgres';
import { Announcements } from "./collections/Announcements";
import { Users } from "./collections/Users";
import Labs from "./collections/Labs";
import Disclosure from "./collections/Disclosures";
import { Gallery } from "./collections/Gallery";
import { Media } from "./collections/Media";
import { Leaders } from "./collections/Leaders";
import Admissions from "./collections/Admissions";
import Contacts from "./collections/Contacts";
import { Events } from "./collections/Events";
import Management from "./collections/Management";
import { Images } from "./collections/Images";
import BusTables from "./collections/BusTables";
import ExecutiveCommittee from "./collections/ExecutiveCommittee";
import PTA from "./collections/PTA";
import Institution from "./collections/Institutions";
import Academics from "./collections/Academics";
import NonAcademics from "./collections/NonAcademics";
import { importExportPlugin } from '@payloadcms/plugin-import-export'
import PTAGroupPhoto from "./collections/PTAGroupPhoto";
import Objective from "./collections/Objective";
import Mission from "./collections/Mission";
import TC from "./collections/TC";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  cors: [
    "http://168.231.103.26:3000", // CMS itself
    "http://localhost:3000",
    "http://localhost:3001", // Vite dev server
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001"
  ],
  csrf: [
    "http://168.231.103.26:3000",
    "http://localhost:3000",
    "http://localhost:3001",
  ],

  collections: [
    Users,
    Announcements,
    Events,
    Gallery,
    Admissions,
    PTA,
    Disclosure,
    TC,
    PTAGroupPhoto,
    Management,
    Academics,
    NonAcademics,
    Images,
    Labs,
    Institution,
    BusTables,
    ExecutiveCommittee,
    Objective,
    Mission,
    Contacts,
    Media,
    Leaders,
  ],
  
  // Add the import-export plugin with additional config to help with compatibility
  plugins: [
    importExportPlugin({
      collections: ['admissions'],
      debug: false,
      disableJobsQueue: true, // This might help with the error
    }),
  ],
  
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "postgres://username:password@localhost:5432/schoolcms",
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "super-secret-key"
}); // <- Added missing closing parenthesis and semicolon