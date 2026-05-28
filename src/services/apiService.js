import api from "../api/axios";

// Upload SAP CSV
export const uploadSAP = async (formData) => {
  const response = await api.post(
    "/upload/sap",
    formData
  );

  return response.data;
};

// Upload Utility CSV
export const uploadUtility = async (
  formData
) => {
  const response = await api.post(
    "/upload/utility",
    formData
  );

  return response.data;
};

// Upload Travel CSV
export const uploadTravel = async (
  formData
) => {
  const response = await api.post(
    "/upload/travel",
    formData
  );

  return response.data;
};

// Get All Records
export const getRecords = async () => {
  const response = await api.get("/records");

  return response.data;
};

// Get Record By ID
export const getRecordById = async (
  id
) => {
  const response = await api.get(
    `/records/${id}`
  );

  return response.data;
};

// Approve Record
export const approveRecord = async (
  id
) => {
  const response = await api.patch(
    `/review/${id}/approve`
  );

  return response.data;
};

// Reject Record
export const rejectRecord = async (
  id
) => {
  const response = await api.patch(
    `/review/${id}/reject`
  );

  return response.data;
};

