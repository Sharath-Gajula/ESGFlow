import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getRecordById } from "../services/apiService";

function RecordDetails() {
  const { id } = useParams();

  const [record, setRecord] =
    useState(null);

  // Fetch Record
  const fetchRecord = async () => {
    try {
      const data =
        await getRecordById(id);

      setRecord(data.record);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecord();
  }, []);

  if (!record) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-10">
      
      <h1 className="text-3xl font-bold mb-8">
        Record Details
      </h1>

      {/* Normalized Data */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        
        <h2 className="text-2xl font-semibold mb-4">
          Normalized Record
        </h2>

        <div className="space-y-3">
          
          <p>
            <strong>Source Type:</strong>{" "}
            {record.sourceType}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {record.category}
          </p>

          <p>
            <strong>Scope:</strong>{" "}
            {record.scope}
          </p>

          <p>
            <strong>Value:</strong>{" "}
            {record.normalizedValue}{" "}
            {record.unit}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {record.status}
          </p>

          <p>
            <strong>Reviewed By:</strong>{" "}
            {record.reviewedBy || "N/A"}
          </p>

        </div>
      </div>

      {/* Suspicious Flags */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        
        <h2 className="text-2xl font-semibold mb-4">
          Suspicious Flags
        </h2>

        {record.suspiciousFlags
          ?.length > 0 ? (
          <ul className="list-disc pl-6">
            {record.suspiciousFlags.map(
              (flag, index) => (
                <li key={index}>
                  {flag}
                </li>
              )
            )}
          </ul>
        ) : (
          <p>No suspicious flags</p>
        )}
      </div>

      {/* Raw Uploaded Data */}
      <div className="bg-white shadow-md rounded-lg p-6">
        
        <h2 className="text-2xl font-semibold mb-4">
          Raw Uploaded Data
        </h2>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          {JSON.stringify(
            record.rawDataId
              ?.originalRow,
            null,
            2
          )}
        </pre>

      </div>
    </div>
  );
}

export default RecordDetails;