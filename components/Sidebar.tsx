
import React, { useState } from 'react';
import type { NavView } from '../types';
import { NAV_ITEMS } from '../constants';

interface SidebarProps {
  activeView: NavView;
  setActiveView: (view: NavView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`bg-slate-100/80 text-slate-700 flex flex-col transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center h-20 border-b border-slate-200 px-4">
        <div className={`text-2xl font-bold text-teal-600 ${isCollapsed ? 'hidden' : 'block'}`}>
            eDoc AI
        </div>
        <div className={`text-teal-600 ${isCollapsed ? 'mx-auto' : 'hidden'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        </div>
      </div>

      <nav className="flex-1 py-4">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.name} className="px-4 mb-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveView(item.name);
                }}
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeView === item.name
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'hover:bg-slate-200/70'
                }`}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <span className={`ml-4 font-medium transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-200">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-3 rounded-lg hover:bg-slate-200/70 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition-transform duration-300 ${
              isCollapsed ? 'rotate-180' : ''
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span className={`ml-2 font-medium ${isCollapsed ? 'hidden' : ''}`}>Collapse</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
