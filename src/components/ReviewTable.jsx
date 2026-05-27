import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";

function ReviewTable({
  records,
  onApprove,
  onReject,
}) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-lg">
      
      <table className="min-w-full">
        
        {/* TABLE HEADER */}
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
              Source
            </th>

            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
              Category
            </th>

            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
              Scope
            </th>

            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
              Value
            </th>

            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
              Status
            </th>

            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
              Flags
            </th>

            <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
              Actions
            </th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>
          {records.length > 0 ? (
            records.map((record, index) => (
              <tr
                key={record._id}
                className={`
                  border-b border-slate-100 transition-all duration-200
                  hover:bg-slate-50
                  ${index % 2 === 0 ? "bg-white" : "bg-slate-50/40"}
                `}
              >
                
                {/* SOURCE */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    
                    {/* Icon Circle */}
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-700 font-bold">
                        {record.sourceType?.charAt(0)}
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-800">
                        {record.sourceType}
                      </p>

                      <p className="text-xs text-slate-500">
                        ESG Source
                      </p>
                    </div>
                  </div>
                </td>

                {/* CATEGORY */}
                <td className="px-6 py-5">
                  <Link
                    to={`/records/${record._id}`}
                    className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition"
                  >
                    {record.category}
                  </Link>
                </td>

                {/* SCOPE */}
                <td className="px-6 py-5">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                    {record.scope}
                  </span>
                </td>

                {/* VALUE */}
                <td className="px-6 py-5">
                  <div>
                    <p className="font-bold text-slate-800 text-lg">
                      {record.normalizedValue}
                    </p>

                    <p className="text-xs text-slate-500">
                      {record.unit}
                    </p>
                  </div>
                </td>

                {/* STATUS */}
                <td className="px-6 py-5">
                  <StatusBadge
                    status={record.status}
                  />
                </td>

                {/* FLAGS */}
                <td className="px-6 py-5">
                  {record.suspiciousFlags
                    ?.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {record.suspiciousFlags.map(
                        (flag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200"
                          >
                            {flag}
                          </span>
                        )
                      )}
                    </div>
                  ) : (
                    <span className="text-emerald-600 font-medium text-sm">
                      ✓ No Flags
                    </span>
                  )}
                </td>

                {/* ACTIONS */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    
                    <button
                      onClick={() =>
                        onApprove(record._id)
                      }
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md transition-all duration-200 hover:scale-105"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        onReject(record._id)
                      }
                      className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-md transition-all duration-200 hover:scale-105"
                    >
                      Reject
                    </button>

                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="text-center py-16"
              >
                <div className="flex flex-col items-center">
                  
                  <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">
                      📂
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-700">
                    No Records Found
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Uploaded ESG records will appear here.
                  </p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ReviewTable;