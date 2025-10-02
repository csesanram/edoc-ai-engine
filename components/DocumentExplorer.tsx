
import React, { useState } from 'react';
import type { Folder, RecentFile } from '../types';

const folderData: Folder[] = [
    { id: '1', name: 'Financials', children: [
        { id: '1-1', name: '2024 Reports' },
        { id: '1-2', name: '2023 Reports' },
    ]},
    { id: '2', name: 'Legal Documents' },
    { id: '3', name: 'Marketing', children: [
        { id: '3-1', name: 'Campaigns' },
        { id: '3-2', name: 'Assets' },
    ]},
    { id: '4', name: 'Human Resources' },
];

const fileData: RecentFile[] = [
  { id: 'f1', name: 'Q4_Financial_Report.pdf', type: 'PDF', status: 'Categorized', date: '2024-07-21' },
  { id: 'f2', name: 'Project_Alpha_Specification.docx', type: 'DOCX', status: 'Categorized', date: '2024-07-21' },
  { id: 'f3', name: 'Marketing_Budget_2025.xlsx', type: 'XLSX', status: 'Processing', date: '2024-07-20' },
  { id: 'f4', name: 'NDA_Template.pdf', type: 'PDF', status: 'Categorized', date: '2024-07-18' },
];

const FolderTree: React.FC<{ folders: Folder[]; activeFolder: string; setActiveFolder: (id: string) => void; level?: number }> = ({ folders, activeFolder, setActiveFolder, level = 0 }) => {
    return (
        <ul className={level > 0 ? 'ml-4' : ''}>
            {folders.map(folder => (
                <li key={folder.id}>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveFolder(folder.id); }} className={`flex items-center p-2 rounded-md text-sm transition-colors ${activeFolder === folder.id ? 'bg-teal-100 text-teal-700 font-semibold' : 'hover:bg-slate-100'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /></svg>
                        {folder.name}
                    </a>
                    {folder.children && <FolderTree folders={folder.children} activeFolder={activeFolder} setActiveFolder={setActiveFolder} level={level + 1} />}
                </li>
            ))}
        </ul>
    );
};


const DocumentExplorer: React.FC = () => {
    const [activeFolder, setActiveFolder] = useState('1-1');

    return (
        <div className="flex h-full bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
            <aside className="w-1/4 border-r border-slate-200 p-4 overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4 text-slate-700 px-2">Folders</h2>
                <FolderTree folders={folderData} activeFolder={activeFolder} setActiveFolder={setActiveFolder} />
            </aside>
            <main className="w-3/4 p-6 flex flex-col">
                <div className="flex-shrink-0 flex items-center justify-between mb-4">
                     <div className="relative w-full max-w-sm">
                        <input type="text" placeholder="Search files..." className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"/>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-400"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                        </div>
                    </div>
                     <div className="flex items-center space-x-2">
                         <select className="border border-slate-300 rounded-lg py-2 px-3 text-sm focus:ring-teal-500 focus:border-teal-500">
                             <option>Any Type</option>
                             <option>PDF</option>
                             <option>DOCX</option>
                             <option>XLSX</option>
                         </select>
                         <input type="date" className="border border-slate-300 rounded-lg py-1.5 px-3 text-sm focus:ring-teal-500 focus:border-teal-500"/>
                     </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <table className="w-full text-left">
                        <thead className="border-b border-slate-200 bg-slate-50 sticky top-0">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-slate-500">Name</th>
                                <th className="p-4 text-sm font-semibold text-slate-500">Type</th>
                                <th className="p-4 text-sm font-semibold text-slate-500">Date Modified</th>
                                <th className="p-4 text-sm font-semibold text-slate-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fileData.map((file) => (
                                <tr key={file.id} className="border-b border-slate-200/50 hover:bg-slate-50">
                                    <td className="p-4 font-medium text-slate-800">{file.name}</td>
                                    <td className="p-4 text-slate-600">{file.type}</td>
                                    <td className="p-4 text-slate-600">{file.date}</td>
                                    <td className="p-4">
                                        <button className="text-red-500 hover:text-red-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default DocumentExplorer;
