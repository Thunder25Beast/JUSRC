// Document management utilities for JUSRC Research Portal

export interface Document {
  id: string;
  title: string;
  description: string;
  fileName: string;
  category: DocumentCategory;
  subcategory?: string;
  fileSize?: string;
  uploadDate: string;
  tags?: string[];
  downloadCount?: number;
}

export type DocumentCategory = 
  | 'grants' 
  | 'proposals' 
  | 'guidelines' 
  | 'forms' 
  | 'resources';

export const documentCategories: Record<DocumentCategory, string> = {
  grants: 'Grants & Funding',
  proposals: 'Research Proposals',
  guidelines: 'Guidelines & Policies',
  forms: 'Application Forms',
  resources: 'Research Resources'
};

// Document database - Add your documents here
export const documents: Document[] = [
  // IAP Grant Documents
  {
    id: 'iap-guidelines-2024',
    title: 'IAP Grant Guidelines 2024',
    description: 'Complete guidelines for IAP grant application process',
    fileName: 'IAP_Grant_Guidelines_2024.pdf',
    category: 'grants',
    subcategory: 'iap',
    fileSize: '2.5 MB',
    uploadDate: '2024-10-01',
    tags: ['IAP', 'grants', 'guidelines', 'funding'],
    downloadCount: 0
  },
  {
    id: 'iap-application-form',
    title: 'IAP Grant Application Form',
    description: 'Official application form for IAP grant submissions',
    fileName: 'IAP_Application_Form.pdf',
    category: 'forms',
    subcategory: 'iap',
    fileSize: '1.2 MB',
    uploadDate: '2024-10-01',
    tags: ['IAP', 'application', 'form', 'grants'],
    downloadCount: 0
  },
  // Add more documents as needed
];

// Get documents by category
export const getDocumentsByCategory = (category: DocumentCategory): Document[] => {
  return documents.filter(doc => doc.category === category);
};

// Get documents by subcategory
export const getDocumentsBySubcategory = (subcategory: string): Document[] => {
  return documents.filter(doc => doc.subcategory === subcategory);
};

// Search documents
export const searchDocuments = (query: string): Document[] => {
  const lowercaseQuery = query.toLowerCase();
  return documents.filter(doc => 
    doc.title.toLowerCase().includes(lowercaseQuery) ||
    doc.description.toLowerCase().includes(lowercaseQuery) ||
    doc.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Get document download URL
export const getDocumentUrl = (document: Document): string => {
  const basePath = '/documents';
  const categoryPath = document.category;
  const subcategoryPath = document.subcategory ? `/${document.subcategory}` : '';
  return `${basePath}/${categoryPath}${subcategoryPath}/${document.fileName}`;
};

// Download document
export const downloadDocument = (doc: Document): void => {
  const url = getDocumentUrl(doc);
  const link = window.document.createElement('a');
  link.href = url;
  link.download = doc.fileName;
  link.target = '_blank';
  window.document.body.appendChild(link);
  link.click();
  window.document.body.removeChild(link);
  
  // Track download (you can implement analytics here)
  console.log(`Downloaded: ${doc.title}`);
};

// Format file size
export const formatFileSize = (bytes: number): string => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
};

// Format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};