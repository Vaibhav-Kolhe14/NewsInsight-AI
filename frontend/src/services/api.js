import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export const analyzeImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API}/predict`, formData);
  return res.data;
};