
import React from 'react';
import type { AuditLog } from '../types';

const logsData: AuditLog[] = [
    { id: 'l1', user: 'Alice Johnson', userAvatar: 'https://picsum.photos/id/1027/100/100', action: 'UPLOAD', date: '2024-07-21 10:30 AM', details: 'Uploaded file Q4_Financial_Report.pdf' },
    { id: 'l2', user: 'AI System', userAvatar: 'https://picsum.photos/seed/ai/100/100', action: 'AI_CLASSIFICATION', date: '2024-07-21 10:31 AM', details: 'Classified Q4_Financial_Report.pdf as "Financial Report" with 98% confidence' },
    { id: 'l3', user: 'Bob Williams', userAvatar: 'https://picsum.photos/id/1005/100/100', action: 'DELETE', date: '2024-07-20 02:15 PM', details: 'Deleted file Old_Marketing_Draft.docx' },
    { id: 'l4', user: 'Charlie Brown', userAvatar: 'https://picsum.photos/id/1011/100/100', action: 'LOGIN', date: '2024-07-20 09:00 AM', details: 'User logged in successfully' },
];

const ActionBadge: React.FC<{ action: AuditLog['action'] }> = ({ action }) => {
  const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full';
  const actionClasses = {
    UPLOAD: 'bg-blue-100 text-blue-800',
    DELETE: 'bg-red-100 text-red-800',
    AI_CLASSIFICATION: 'bg-purple-100 text-purple-800',
    LOGIN: 'bg-green-100 text-green-800',
  };
  return <span className={`${baseClasses} ${actionClasses[action]}`}>{action.replace('_', ' ')}</span>;
};

const AuditLogs: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">Audit Logs</h2>
            <div className="flex items-center space-x-4 mb-4 pb-4 border-b border-slate-200">
                <input type="text" placeholder="Filter by user..." className="w-full max-w-xs pl-4 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-teal-500 focus:border-teal-500"/>
                <input type="date" className="border border-slate-300 rounded-lg py-1.5 px-3 text-sm focus:ring-teal-500 focus:border-teal-500"/>
                <select className="border border-slate-300 rounded-lg py-2 px-3 text-sm focus:ring-teal-500 focus:border-teal-500">
                    <option>All Actions</option>
                    <option>Upload</option>
                    <option>Delete</option>
                    <option>AI Classification</option>
                    <option>Login</option>
                </select>
            </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b border-slate-200">
                        <tr>
                            <th className="p-4 text-sm font-semibold text-slate-500">User</th>
                            <th className="p-4 text-sm font-semibold text-slate-500">Action</th>
                            <th className="p-4 text-sm font-semibold text-slate-500">Details</th>
                            <th className="p-4 text-sm font-semibold text-slate-500">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logsData.map((log) => (
                            <tr key={log.id} className="border-b border-slate-200/50 hover:bg-slate-50">
                                <td className="p-4">
                                     <div className="flex items-center">
                                        <img src={log.userAvatar} alt={log.user} className="h-8 w-8 rounded-full object-cover"/>
                                        <p className="ml-3 font-medium text-slate-800">{log.user}</p>
                                    </div>
                                </td>
                                <td className="p-4"><ActionBadge action={log.action} /></td>
                                <td className="p-4 text-slate-600">{log.details}</td>
                                <td className="p-4 text-slate-600">{log.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AuditLogs;
