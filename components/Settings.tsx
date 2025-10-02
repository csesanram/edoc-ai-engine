
import React, { useState } from 'react';

const ToggleSwitch: React.FC<{ label: string; enabled: boolean; setEnabled: (enabled: boolean) => void }> = ({ label, enabled, setEnabled }) => (
    <div className="flex items-center justify-between">
        <span className="font-medium text-slate-700">{label}</span>
        <div onClick={() => setEnabled(!enabled)} className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${enabled ? 'bg-teal-500' : 'bg-slate-300'}`}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${enabled ? 'translate-x-6' : ''}`}></div>
        </div>
    </div>
);

const Settings: React.FC = () => {
    const [notifications, setNotifications] = useState({
        uploadSuccess: true,
        uploadFailed: true,
        aiCategorized: false,
    });

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-700 mb-4 border-b pb-3">API Key Management</h2>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <code className="text-sm text-slate-600 font-mono">texs_************************************</code>
                    <div className="flex items-center space-x-2">
                        <button className="text-sm font-semibold text-slate-600 hover:text-slate-800">Copy</button>
                        <button className="text-sm font-semibold text-red-600 hover:text-red-800">Revoke</button>
                    </div>
                </div>
                 <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md font-semibold text-sm hover:bg-teal-700 transition-colors">Generate New Key</button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-700 mb-4 border-b pb-3">OAuth Connectors</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="Google Drive" className="h-8 w-8 mr-4"/>
                            <div>
                                <p className="font-semibold text-slate-800">Google Drive</p>
                                <p className="text-sm text-green-600 font-medium">Connected</p>
                            </div>
                        </div>
                        <button className="text-sm font-semibold text-red-600 hover:text-red-800">Disconnect</button>
                    </div>
                     <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-center">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/SharePoint_Logo.svg" alt="SharePoint" className="h-8 w-8 mr-4"/>
                            <div>
                                <p className="font-semibold text-slate-800">Microsoft SharePoint</p>
                                <p className="text-sm text-slate-500">Not connected</p>
                            </div>
                        </div>
                        <button className="text-sm font-semibold text-teal-600 hover:text-teal-800">Connect</button>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-700 mb-4 border-b pb-3">Notification Preferences</h2>
                <div className="space-y-4">
                    <ToggleSwitch label="Email on successful upload" enabled={notifications.uploadSuccess} setEnabled={val => setNotifications(p => ({...p, uploadSuccess: val}))} />
                    <ToggleSwitch label="Email on failed upload" enabled={notifications.uploadFailed} setEnabled={val => setNotifications(p => ({...p, uploadFailed: val}))} />
                    <ToggleSwitch label="Email when AI categorization is complete" enabled={notifications.aiCategorized} setEnabled={val => setNotifications(p => ({...p, aiCategorized: val}))} />
                </div>
                 <button className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700 transition-colors">Save Preferences</button>
            </div>
        </div>
    );
};

export default Settings;
