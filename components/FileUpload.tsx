import React, { useState, useCallback } from 'react';
import axios from 'axios';

interface UploadResponse {
  filename: string;
  status: string;
  category: string;
  zone: string;
}

const FileUpload: React.FC = () => {
    const [isUploading, setIsUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [uploadedFiles, setUploadedFiles] = useState<UploadResponse[]>([]);
    const [error, setError] = useState<string | null>(null);

    const uploadFile = async (file: File) => {
        setIsUploading(true);
        setProgress(0);
        setError(null);

        const formData = new FormData();
        formData.append('file', file, file.name);  // Include filename explicitly

        try {
            const response = await axios.post('http://127.0.0.1:8000/upload/', formData, {
                headers: {
                    'Accept': 'application/json',
                    // Let the browser set the Content-Type with boundary
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = progressEvent.total
                        ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        : 0;
                    setProgress(percentCompleted);
                },
                // Ensure proper handling of binary data
                responseType: 'json',
                transformRequest: [(data) => data]  // Prevent axios from trying to transform the FormData
            });

            setUploadedFiles(prev => [...prev, response.data]);
        } catch (err) {
            console.error('Upload error:', err);
            setError(err instanceof Error ? err.message : 'Failed to upload file');
        } finally {
            setTimeout(() => {
                setIsUploading(false);
                setProgress(0);
            }, 1000);
        }
    };

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        files.forEach(uploadFile);
    }, []);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        files.forEach(uploadFile);
    };




    return (
        <div className="max-w-4xl mx-auto">
             <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-sm">
                <div
                    className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-300 rounded-lg text-center cursor-pointer hover:border-teal-500 hover:bg-teal-50/50 transition-colors"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mt-4 text-lg font-semibold text-slate-700">Drag & drop files here</p>
                    <p className="text-slate-500">or</p>
                    <label className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700 transition-colors cursor-pointer">
                        Browse Local Files
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFileInput}
                            multiple
                        />
                    </label>
                </div>
             </div>

             {isUploading && (
                 <div className="mt-6 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                     <h3 className="font-semibold text-slate-700">Uploading...</h3>
                     <div className="mt-2 w-full bg-slate-200 rounded-full h-2.5">
                         <div className="bg-teal-500 h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
                     </div>
                     <p className="text-right text-sm text-slate-500 mt-1">{Math.round(progress)}%</p>
                 </div>
             )}

            {error && (
                <div className="mt-6 bg-red-50 p-4 rounded-xl border border-red-200 text-red-700">
                    {error}
                </div>
            )}

            {uploadedFiles.length > 0 && (
                <div className="mt-6 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                    <h3 className="font-semibold text-slate-700 mb-4">Uploaded Files</h3>
                    <div className="space-y-4">
                        {uploadedFiles.map((file, index) => (
                            <div key={index} className="p-4 bg-slate-50 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-slate-700">{file.filename}</span>
                                    <span className={`px-2 py-1 rounded-full text-sm ${
                                        file.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {file.status}
                                    </span>
                                </div>
                                <div className="mt-2 text-sm text-slate-600">
                                    <p>Category: {file.category}</p>
                                    <p>Zone: {file.zone}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-8">
                <p className="text-center text-slate-500 mb-4">Or import from another source</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="flex items-center justify-center p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-teal-500 hover:shadow-md transition-all">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="Google Drive" className="h-6 w-6 mr-3"/>
                        <span className="font-semibold text-slate-700">Google Drive</span>
                    </button>
                    <button className="flex items-center justify-center p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-teal-500 hover:shadow-md transition-all">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/SharePoint_Logo.svg" alt="SharePoint" className="h-6 w-6 mr-3"/>
                       <span className="font-semibold text-slate-700">SharePoint</span>
                    </button>
                     <button className="flex items-center justify-center p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-teal-500 hover:shadow-md transition-all">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-slate-600">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                         </svg>
                         <span className="font-semibold text-slate-700">SFTP</span>
                     </button>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;