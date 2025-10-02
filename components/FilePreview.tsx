
import React from 'react';

const FilePreview: React.FC = () => {
    const metadata = {
        'File Name': 'Q4_Financial_Report.pdf',
        'Author': 'John Doe',
        'Upload Date': '2024-07-21',
        'Last Modified': '2024-07-22',
        'File Size': '2.4 MB',
        'Tags': ['Finance', 'Q4', 'Report'],
        'Source': 'Local Upload',
        'AI Category': 'Financial Report'
    };

    return (
        <div className="flex h-full bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
            <main className="w-3/4 p-4 flex flex-col items-center justify-center bg-slate-100">
                <div className="w-full h-full border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-slate-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <p className="mt-4 text-lg font-semibold">Document Preview Area</p>
                    <p className="text-sm">Previews for PDF, DOCX, XLSX will be shown here.</p>
                </div>
            </main>
            <aside className="w-1/4 border-l border-slate-200 p-6 flex flex-col">
                <h2 className="text-xl font-semibold mb-6 text-slate-700">Metadata</h2>
                <div className="flex-1 space-y-4 overflow-y-auto">
                    {Object.entries(metadata).map(([key, value]) => (
                        <div key={key}>
                            <p className="text-sm font-medium text-slate-500">{key}</p>
                            {Array.isArray(value) ? (
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {value.map(tag => (
                                        <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800">{tag}</span>
                                    ))}
                                </div>
                            ) : (
                                <p className="font-semibold text-slate-800">{value}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <button className="w-full px-4 py-2.5 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Download File
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default FilePreview;
