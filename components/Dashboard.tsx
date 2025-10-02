import React from 'react';
import type { DashboardSummary, RecentFile } from '../types';

const summaryData: DashboardSummary = {
  totalFiles: 1254,
  categorized: 980,
  uncategorized: 250,
  failed: 24,
};

const recentFilesData: RecentFile[] = [
  { id: 'f1', name: 'Q4_Financial_Report.pdf', type: 'PDF', status: 'Categorized', date: '2024-07-21' },
  { id: 'f2', name: 'Project_Alpha_Specification.docx', type: 'DOCX', status: 'Categorized', date: '2024-07-21' },
  { id: 'f3', name: 'Marketing_Budget_2025.xlsx', type: 'XLSX', status: 'Processing', date: '2024-07-20' },
  { id: 'f4', name: 'Team_Photo_Event.jpg', type: 'JPG', status: 'Failed', date: '2024-07-20' },
  { id: 'f5', name: 'invoice_INV-9823.pdf', type: 'PDF', status: 'Uploaded', date: '2024-07-19' },
];

const StatusBadge: React.FC<{ status: RecentFile['status'] }> = ({ status }) => {
  const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full';
  const statusClasses = {
    Uploaded: 'bg-blue-100 text-blue-800',
    Processing: 'bg-yellow-100 text-yellow-800 animate-pulse',
    Categorized: 'bg-green-100 text-green-800',
    Failed: 'bg-red-100 text-red-800',
  };
  return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
};


// Fix: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const DashboardCard: React.FC<{ title: string; value: number; icon: React.ReactElement, color: string }> = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="text-3xl font-bold text-slate-800 mt-1">{value.toLocaleString()}</p>
    </div>
    <div className={`p-3 rounded-full ${color}`}>
      {icon}
    </div>
  </div>
);


const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Files" value={summaryData.totalFiles} color="bg-teal-100 text-teal-600" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} />
        <DashboardCard title="Categorized" value={summaryData.categorized} color="bg-green-100 text-green-600" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
        <DashboardCard title="Uncategorized" value={summaryData.uncategorized} color="bg-yellow-100 text-yellow-600" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
        <DashboardCard title="Ingestion Failed" value={summaryData.failed} color="bg-red-100 text-red-600" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-slate-700">Recent Uploads</h2>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="border-b border-slate-200">
                    <tr>
                        <th className="p-4 text-sm font-semibold text-slate-500">File Name</th>
                        <th className="p-4 text-sm font-semibold text-slate-500">Type</th>
                        <th className="p-4 text-sm font-semibold text-slate-500">Status</th>
                        <th className="p-4 text-sm font-semibold text-slate-500">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {recentFilesData.map((file) => (
                        <tr key={file.id} className="border-b border-slate-200/50 hover:bg-slate-50">
                            <td className="p-4 font-medium text-slate-800">{file.name}</td>
                            <td className="p-4 text-slate-600">{file.type}</td>
                            <td className="p-4"><StatusBadge status={file.status} /></td>
                            <td className="p-4 text-slate-600">{file.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;