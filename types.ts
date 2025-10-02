// Fix: Import React to provide JSX namespace.
import type React from 'react';

export type NavView =
  | 'Dashboard'
  | 'File Upload'
  | 'Document Explorer'
  | 'AI Categorization'
  | 'File Preview & Metadata'
  | 'User & Access Management'
  | 'Audit Logs'
  | 'Settings';

export interface NavItem {
  name: NavView;
  icon: JSX.Element;
}

export interface DashboardSummary {
  totalFiles: number;
  categorized: number;
  uncategorized: number;
  failed: number;
}

export interface RecentFile {
  id: string;
  name: string;
  type: 'PDF' | 'DOCX' | 'XLSX' | 'JPG';
  status: 'Uploaded' | 'Processing' | 'Categorized' | 'Failed';
  date: string;
}

export interface Folder {
    id: string;
    name: string;
    children?: Folder[];
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'Admin' | 'Editor' | 'Viewer';
    avatar: string;
}

export interface AuditLog {
    id: string;
    user: string;
    userAvatar: string;
    action: 'UPLOAD' | 'DELETE' | 'AI_CLASSIFICATION' | 'LOGIN';
    date: string;
    details: string;
}

export interface AICategorizedFile {
    id: string;
    name: string;
    detectedCategory: string;
    confidence: number;
    assignedCategory: string;
}

export interface CategorizationRule {
    id: string;
    condition: string;
    action: string;
    isActive: boolean;
}