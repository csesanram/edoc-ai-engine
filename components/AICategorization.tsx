
import React from 'react';
import type { AICategorizedFile, CategorizationRule } from '../types';

const aiFilesData: AICategorizedFile[] = [
    { id: 'f1', name: 'Invoice_ABC_Corp.pdf', detectedCategory: 'Invoice', confidence: 0.98, assignedCategory: 'Invoice' },
    { id: 'f2', name: 'MSA_ClientX.docx', detectedCategory: 'Contract', confidence: 0.92, assignedCategory: 'Contract' },
    { id: 'f3', name: 'Marketing_Proposal_Q3.pdf', detectedCategory: 'Proposal', confidence: 0.85, assignedCategory: 'Proposal' },
    { id: 'f4', name: 'Employee_Handbook.docx', detectedCategory: 'HR Document', confidence: 0.99, assignedCategory: 'HR Document' },
    { id: 'f5', name: 'receipt_0012.jpg', detectedCategory: 'Receipt', confidence: 0.76, assignedCategory: 'Receipt' },
];

const rulesData: CategorizationRule[] = [
    { id: 'r1', condition: 'If filename contains "invoice"', action: 'Set category to "Invoice"', isActive: true },
    { id: 'r2', condition: 'If content contains "Master Services Agreement"', action: 'Set category to "Contract"', isActive: true },
    { id: 'r3', condition: 'If from "hr@company.com"', action: 'Set category to "HR Document"', isActive: false },
];

const ConfidenceMeter: React.FC<{ value: number }> = ({ value }) => {
    const percentage = value * 100;
    let color = 'bg-green-500';
    if (percentage < 90) color = 'bg-yellow-500';
    if (percentage < 80) color = 'bg-orange-500';

    return (
        <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div className={`${color} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
        </div>
    );
};

const AICategorization: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-slate-700">AI-Classified Files</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b border-slate-200">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-slate-500">File Name</th>
                                <th className="p-4 text-sm font-semibold text-slate-500">AI Category</th>
                                <th className="p-4 text-sm font-semibold text-slate-500 w-48">Confidence</th>
                                <th className="p-4 text-sm font-semibold text-slate-500">Assigned Category</th>
                                <th className="p-4 text-sm font-semibold text-slate-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {aiFilesData.map((file) => (
                                <tr key={file.id} className="border-b border-slate-200/50 hover:bg-slate-50">
                                    <td className="p-4 font-medium text-slate-800">{file.name}</td>
                                    <td className="p-4 text-slate-600">{file.detectedCategory}</td>
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <ConfidenceMeter value={file.confidence} />
                                            <span className="ml-2 text-sm text-slate-600 font-mono">{(file.confidence * 100).toFixed(0)}%</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-600">{file.assignedCategory}</td>
                                    <td className="p-4">
                                        <button className="text-sm text-teal-600 hover:text-teal-800 font-semibold">Override</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

             <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-slate-700">Rule Management</h2>
                    <button className="px-4 py-2 bg-teal-600 text-white rounded-md font-semibold text-sm hover:bg-teal-700 transition-colors">Add New Rule</button>
                </div>
                <div className="space-y-3">
                    {rulesData.map(rule => (
                        <div key={rule.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                            <div>
                                <p className="font-semibold text-slate-800">{rule.condition}</p>
                                <p className="text-sm text-slate-500">➔ {rule.action}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                 <div className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer ${rule.isActive ? 'bg-teal-500' : 'bg-slate-300'}`}>
                                     <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${rule.isActive ? 'translate-x-4' : ''}`}></div>
                                 </div>
                                <button className="text-slate-500 hover:text-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AICategorization;
