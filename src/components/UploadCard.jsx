import { useRef } from "react";

function UploadCard({
  title,
  onUpload,
  loading,
}) {
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    await onUpload(formData);
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-emerald-100 blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10">
        
        {/* Icon */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 shadow-lg">
          <span className="text-3xl text-white">
            📁
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-slate-800">
          {title}
        </h2>

        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
          Upload your ESG CSV data file for
          processing, validation, and review.
        </p>

        {/* Upload Area */}
        <div
          onClick={() =>
            fileInputRef.current.click()
          }
          className="
            mt-6 cursor-pointer rounded-2xl border-2 border-dashed
            border-slate-300 bg-slate-50 p-8 text-center
            transition-all duration-300
            hover:border-emerald-500 hover:bg-emerald-50
          "
        >
          
          <div className="flex flex-col items-center">
            
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
              <span className="text-2xl">
                ⬆
              </span>
            </div>

            <p className="font-semibold text-slate-700">
              Click to upload CSV file
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Supports .csv files only
            </p>
          </div>

          {/* Hidden Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-blue-50 px-4 py-3 border border-blue-100">
            
            {/* Spinner */}
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />

            <p className="text-sm font-medium text-blue-700">
              Uploading and processing file...
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
          
          <p className="text-xs text-slate-400">
            Secure ESG Data Upload
          </p>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            CSV Only
          </span>
        </div>
      </div>
    </div>
  );
}

export default UploadCard;