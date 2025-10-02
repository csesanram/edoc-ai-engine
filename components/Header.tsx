
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex-shrink-0 bg-white h-20 flex items-center justify-between px-8 border-b border-slate-200">
      <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-slate-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
        <div className="flex items-center space-x-2">
            <img className="h-10 w-10 rounded-full object-cover" src="https://picsum.photos/100/100" alt="User Avatar" />
            <div>
                <div className="font-semibold text-slate-700">Admin User</div>
                <div className="text-sm text-slate-500">admin@edoc.com</div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
