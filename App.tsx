
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import FileUpload from './components/FileUpload';
import DocumentExplorer from './components/DocumentExplorer';
import AICategorization from './components/AICategorization';
import FilePreview from './components/FilePreview';
import UserManagement from './components/UserManagement';
import AuditLogs from './components/AuditLogs';
import Settings from './components/Settings';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import type { NavView } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<NavView>('Dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'File Upload':
        return <FileUpload />;
      case 'Document Explorer':
        return <DocumentExplorer />;
      case 'AI Categorization':
        return <AICategorization />;
      case 'File Preview & Metadata':
        return <FilePreview />;
      case 'User & Access Management':
        return <UserManagement />;
      case 'Audit Logs':
        return <AuditLogs />;
      case 'Settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/app/*"
          element={
            <div className="flex h-screen bg-slate-50 text-slate-800">
              <Sidebar activeView={activeView} setActiveView={setActiveView} />
              <main className="flex-1 flex flex-col overflow-hidden">
                <Header title={activeView} />
                <div className="flex-1 overflow-y-auto p-8">
                  {renderContent()}
                </div>
              </main>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
