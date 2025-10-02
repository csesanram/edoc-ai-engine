
import React from 'react';
import type { User } from '../types';

const usersData: User[] = [
    { id: 'u1', name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Admin', avatar: 'https://picsum.photos/id/1027/100/100' },
    { id: 'u2', name: 'Bob Williams', email: 'bob.w@example.com', role: 'Editor', avatar: 'https://picsum.photos/id/1005/100/100' },
    { id: 'u3', name: 'Charlie Brown', email: 'charlie.b@example.com', role: 'Viewer', avatar: 'https://picsum.photos/id/1011/100/100' },
    { id: 'u4', name: 'Diana Miller', email: 'diana.m@example.com', role: 'Editor', avatar: 'https://picsum.photos/id/1012/100/100' },
];


const RoleBadge: React.FC<{ role: User['role'] }> = ({ role }) => {
  const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full';
  const roleClasses = {
    Admin: 'bg-red-100 text-red-800',
    Editor: 'bg-blue-100 text-blue-800',
    Viewer: 'bg-slate-200 text-slate-800',
  };
  return <span className={`${baseClasses} ${roleClasses[role]}`}>{role}</span>;
};

const UserManagement: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-slate-700">User & Access Management</h2>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-md font-semibold text-sm hover:bg-teal-700 transition-colors">Add User</button>
            </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b border-slate-200">
                        <tr>
                            <th className="p-4 text-sm font-semibold text-slate-500">User</th>
                            <th className="p-4 text-sm font-semibold text-slate-500">Role</th>
                            <th className="p-4 text-sm font-semibold text-slate-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user) => (
                            <tr key={user.id} className="border-b border-slate-200/50 hover:bg-slate-50">
                                <td className="p-4">
                                    <div className="flex items-center">
                                        <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full object-cover"/>
                                        <div className="ml-4">
                                            <p className="font-semibold text-slate-800">{user.name}</p>
                                            <p className="text-sm text-slate-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4"><RoleBadge role={user.role} /></td>
                                <td className="p-4">
                                    <div className="flex space-x-2">
                                        <button className="p-2 text-slate-500 hover:text-teal-600 rounded-full hover:bg-slate-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
                                        </button>
                                         <button className="p-2 text-slate-500 hover:text-red-600 rounded-full hover:bg-slate-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
