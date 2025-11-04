import axiosInstance from "./axios";

export const handlePost = async (endpoint ,data) => {
  const response = await axiosInstance.post(endpoint, data);
  return response.data;
};

export const handleGet = async (endpoint) => {
    
    const response = await axiosInstance.get(endpoint);  
    return response.data;
};
