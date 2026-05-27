import { useEffect, useState } from "react";

import ReviewTable from "../components/ReviewTable";

import {
  getRecords,
  approveRecord,
  rejectRecord,
} from "../services/apiService";

function Dashboard() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Records
  const fetchRecords = async () => {
    try {
      setLoading(true);

      const data = await getRecords();

      setRecords(data.records);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Approve Record
  const handleApprove = async (id) => {
    try {
      await approveRecord(id);

      fetchRecords();
    } catch (error) {
      console.log(error);
    }
  };

  // Reject Record
  const handleReject = async (id) => {
    try {
      await rejectRecord(id);

      fetchRecords();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6 md:p-10">
      
      {/* Header Section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        <div>
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            ESG Review Dashboard
          </h1>

          <p className="text-slate-500 mt-2 text-sm md:text-base">
            Review, approve, and manage ESG uploaded records efficiently.
          </p>
        </div>

        {/* Stats Card */}
        <div className="bg-white shadow-lg rounded-2xl px-6 py-4 border border-slate-200 w-fit">
          <p className="text-sm text-slate-500">
            Total Records
          </p>

          <h2 className="text-3xl font-bold text-emerald-600">
            {records.length}
          </h2>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
          
          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              Review Records
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Manage uploaded sustainability and compliance data.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            {loading ? "Loading..." : `${records.length} records found`}
          </div>
        </div>

        {/* Table */}
        <div className="p-6">
          <ReviewTable
            records={records}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;