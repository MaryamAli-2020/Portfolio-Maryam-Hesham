// data/certificates.ts
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  certificateUrl: string;
  imageUrl: string;
  description: string;
  category: CertificateCategory;
  skills: string[];
}

export type CertificateCategory = 
  | 'machine-learning' 
  | 'data-science' 
  | 'cloud-computing' 
  | 'programming' 
  | 'analytics'
  | 'ai';

export const certificateData: Certificate[] = [
  {
    id: 'google-data-everywhere',
    title: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google',
    issueDate: 'Febuary 2024',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/QTJHSZ98WK59',
    imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~QTJHSZ98WK59/CERTIFICATE_LANDING_PAGE~QTJHSZ98WK59.jpeg',
    description: '',
    category: 'data-science',
    skills: ['Data Cleansing', 'Spreadsheet Software', 'Data Management', 'Data Analysis', 'Data Ethics', 'Data Processing', 'Data-Driven Decision-Making', 'Data Visualization' ]
  },
  {
    id: 'IBM-cloud-computing',
    title: 'Introduction to Cloud Computing',
    issuer: 'IBM',
    issueDate: 'Febuary 2024',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/XGN578ZWFPBS',
    imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~XGN578ZWFPBS/CERTIFICATE_LANDING_PAGE~XGN578ZWFPBS.jpeg',
    description: '',
    category: 'cloud-computing',
    skills: ['Emerging Technologies', 'Serverless Computing', 'Software As A Service', 'Cloud Services', 'Cloud-Native Computing', 'Cloud Security', 'Cloud Platforms', 'Cloud Computing Architecture', 'Virtual Machines' ]
  },
  {
    id: 'isc2-cloud',
    title: 'Cloud and Wireless Security ',
    issuer: 'ISC2',
    issueDate: 'March 2023',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/TYG6QRY6KBDS',
    imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TYG6QRY6KBDS/CERTIFICATE_LANDING_PAGE~TYG6QRY6KBDS.jpeg',
    description: '',
    category: 'cloud-computing',
    skills: [],
  },
  {
    id: 'illinois-data-mining',
    title: 'Pattern Discovery in Data Mining',
    issuer: 'University of Illinois Urbana-Champaign',
    issueDate: 'March 2023',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/EZCBB72PKW27',
    imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~EZCBB72PKW27/CERTIFICATE_LANDING_PAGE~EZCBB72PKW27.jpeg',
    description: '',
    category: 'analytics',
    skills: ['Advanced Analytics', 'Algorithms', 'Spatial Analysis', 'Data Mining', 'Unstructured Data', 'Anomaly Detection', 'Text Mining', 'Big Data', 'Image Analysis'],
  },
  {
    id: 'illinois-clustering',
    title: 'Cluster Analysis in Data Mining ',
    issuer: 'University of Illinois Urbana-Champaign',
    issueDate: 'March 2023',
    certificateUrl: 'https://coursera.org/share/d288101c7641cb619080db5d2d2e3a3d',
    imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UTH45CLW7SX3/CERTIFICATE_LANDING_PAGE~UTH45CLW7SX3.jpeg',
    description: '',
    category: 'machine-learning',
    skills: ['Algorithms', 'EDA', 'Data Analysis', 'Data Validation', 'Data Mining', 'Applied Machine Learning', 'Machine Learning Algorithms', 'Statistical Methods', 'Unsupervised Learning'],
  },
  {
    id: 'mysql-php',
    title: 'Using MySQL Database with PHP',
    issuer: 'Coursera Project Network',
    issueDate: 'July 2023',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/CTNAFUMEA6WB',
    imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~CTNAFUMEA6WB/CERTIFICATE_LANDING_PAGE~CTNAFUMEA6WB.jpeg',
    description: '',
    category: 'programming',
    skills: ['Database', 'Database Mangement', 'Back-End Web Development', 'OOP', 'PHP', 'HTML', 'MySQL', 'Web Development', 'Relational Databases', 'Full-Stack Web Development', 'SQL' ],
  },
  {
    id: 'python-pymongo-mongodb',
    title: 'Creating a Python Application using PyMongo and MongoDB Database',
    issuer: 'Coursera Project Network',
    issueDate: 'July 2023',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/FVWPXQY8G4X3',
    imageUrl: 'https://i.imgur.com/6fteeH1.png',
    description: '',
    category: 'programming',
    skills: [],
  },
  {
    id: 'acit-international',
    title: 'Participation In the 24th International Arab Conference on Information Technology',
    issuer: 'IEEE, ACIT International, & Ajman University',
    issueDate: 'December 2023',
    certificateUrl: 'https://ajman4-my.sharepoint.com/personal/airc_ajman_ac_ae/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fairc%5Fajman%5Fac%5Fae%2FDocuments%2FACIT%272023%20Certificates%2FCertificates%2FCertificates%2DPresenters%2061%2Epdf&parent=%2Fpersonal%2Fairc%5Fajman%5Fac%5Fae%2FDocuments%2FACIT%272023%20Certificates%2FCertificates',
    imageUrl: 'https://i.imgur.com/pnD9IFh.png',
    description: '',
    category: 'machine-learning',
    skills: [],
  },
  {
    id: 'itqan',
    title: 'Certificatin of Internship Completion',
    issuer: 'ITQAN GLobal for Cloud & Digital Computing Systems L.L.C',
    issueDate: 'August 2023',
    certificateUrl: '',
    imageUrl: 'https://i.imgur.com/2ExvFJq.png',
    description: '',
    category: 'cloud-computing',
    skills: [],
  },
  {
    id: 'digital-ajman',
    title: 'Certificatin of Internship Completion',
    issuer: 'Department of Digital Ajman',
    issueDate: 'July 2024',
    certificateUrl: 'https://www.linkedin.com/posts/maryam-hesham-ali-972677230_i-would-like-to-extend-my-heartfelt-gratitude-activity-7226953722247954432-V6UP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnDc6YBXLJhUPD55RmIN5QcxZRG_e_z-x4',
    imageUrl: 'https://i.imgur.com/uHNX0xZ.png',
    description: '',
    category: 'ai',
    skills: [],
  },
];