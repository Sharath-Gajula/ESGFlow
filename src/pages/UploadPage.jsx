import { useState } from "react";

import UploadCard from "../components/UploadCard";

import {
  uploadSAP,
  uploadUtility,
  uploadTravel,
} from "../services/apiService";

function UploadPage() {
  const [loading, setLoading] =
    useState(false);

  // SAP Upload
  const handleSAPUpload = async (
    formData
  ) => {
    try {
      setLoading(true);

      const response =
        await uploadSAP(formData);

      alert(response.message);

      console.log(response);
    } catch (error) {
      console.log(error);

      alert("SAP Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  // Utility Upload
  const handleUtilityUpload = async (
    formData
  ) => {
    try {
      setLoading(true);

      const response =
        await uploadUtility(formData);

      alert(response.message);

      console.log(response);
    } catch (error) {
      console.log(error);

      alert("Utility Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  // Travel Upload
  const handleTravelUpload = async (
    formData
  ) => {
    try {
      setLoading(true);

      const response =
        await uploadTravel(formData);

      alert(response.message);

      console.log(response);
    } catch (error) {
      console.log(error);

      alert("Travel Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">
        Upload ESG Data
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <UploadCard
          title="Upload SAP Fuel Data"
          onUpload={handleSAPUpload}
          loading={loading}
        />

        <UploadCard
          title="Upload Utility Data"
          onUpload={handleUtilityUpload}
          loading={loading}
        />

        <UploadCard
          title="Upload Travel Data"
          onUpload={handleTravelUpload}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default UploadPage;