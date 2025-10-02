
import React from 'react';
import type { NavItem } from './types';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-6 h-6">{children}</div>
);

export const ICONS = {
  DASHBOARD: (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
      </svg>
    </IconWrapper>
  ),
  UPLOAD: (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3.75 3.75M12 9.75l3.75 3.75M3 17.25V21h18v-3.75M3 12.75h18" />
      </svg>
    </IconWrapper>
  ),
  FOLDER: (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h16.5m-16.5 0A2.25 2.25 0 0 1 5.25 7.5h13.5a2.25 2.25 0 0 1 2.25 2.25m-16.5 0v6.75a2.25 2.25 0 0 0 2.25 2.25h12a2.25 2.25 0 0 0 2.25-2.25V9.75" />
      </svg>
    </IconWrapper>
  ),
  ROBOT: (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V8.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 8.25v10.5A2.25 2.25 0 0 0 6.75 21Z" />
      </svg>
    </IconWrapper>
  ),
  DOCUMENT: (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    </IconWrapper>
  ),
  USERS: (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962c.513-.464 1.203-.72 1.936-.72h1.234c.733 0 1.423.256 1.936.72M16.5 18.72A9.094 9.094 0 0 1 12 21a9.094 9.094 0 0 1-4.5-2.28m7.5-5.556c.346-.313.752-.464 1.173-.464h1.234c.42 0 .827.15 1.173.464M8.25 12.45A3.75 3.75 0 0 1 12 8.7a3.75 3.75 0 0 1 3.75 3.75m0 0A3.75 3.75 0 0 1 12 16.2a3.75 3.75 0 0 1-3.75-3.75m0 0h7.5" />
      </svg>
    </IconWrapper>
  ),
  ACTIVITY: (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </IconWrapper>
  ),
  SETTINGS: (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.007 1.11-.95.597.055 1.022.628 1.01 1.232-.012.602-.572 1.03-1.11 1.01-.595-.02-1.022-.489-1.01-1.092ZM13.84 15.94c.09-.542.56-1.007 1.11-.95.597.055 1.022.628 1.01 1.232-.012.602-.572 1.03-1.11 1.01-.595-.02-1.022-.489-1.01-1.092ZM18.09 3.94c.09-.542.56-1.007 1.11-.95.597.055 1.022.628 1.01 1.232-.012.602-.572 1.03-1.11 1.01-.595-.02-1.022-.489-1.01-1.092Zm-9 12c.09-.542.56-1.007 1.11-.95.597.055 1.022.628 1.01 1.232-.012.602-.572 1.03-1.11 1.01-.595-.02-1.022-.489-1.01-1.092ZM13.84 3.94c.09-.542.56-1.007 1.11-.95.597.055 1.022.628 1.01 1.232-.012.602-.572 1.03-1.11 1.01-.595-.02-1.022-.489-1.01-1.092ZM9.594 15.94c.09-.542.56-1.007 1.11-.95.597.055 1.022.628 1.01 1.232-.012.602-.572 1.03-1.11 1.01-.595-.02-1.022-.489-1.01-1.092ZM4.843 3.94a.5.5 0 0 0 0 1h.01a.5.5 0 0 0 0-1h-.01ZM4.843 15.94a.5.5 0 0 0 0 1h.01a.5.5 0 0 0 0-1h-.01ZM6.094 9.94c.09-.542.56-1.007 1.11-.95.597.055 1.022.628 1.01 1.232-.012.602-.572 1.03-1.11 1.01-.595-.02-1.022-.489-1.01-1.092Zm9 0c.09-.542.56-1.007 1.11-.95.597.055 1.022.628 1.01 1.232-.012.602-.572 1.03-1.11 1.01-.595-.02-1.022-.489-1.01-1.092Z" />
      </svg>
    </IconWrapper>
  ),
};


export const NAV_ITEMS: NavItem[] = [
    { name: 'Dashboard', icon: ICONS.DASHBOARD },
    { name: 'File Upload', icon: ICONS.UPLOAD },
    { name: 'Document Explorer', icon: ICONS.FOLDER },
    { name: 'AI Categorization', icon: ICONS.ROBOT },
    { name: 'File Preview & Metadata', icon: ICONS.DOCUMENT },
    { name: 'User & Access Management', icon: ICONS.USERS },
    { name: 'Audit Logs', icon: ICONS.ACTIVITY },
    { name: 'Settings', icon: ICONS.SETTINGS },
];
