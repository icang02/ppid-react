import config from "./config";

const api = {
  getNewsHome: () => `${config.API_URL}/landing/berita`,
  getDetailNews: (val) => `${config.API_URL}/berita/${val}`,
  getInfoSertaMerta: () => `${config.API_URL}/informasi-publik/serta-merta`,
  getSearchNews: (page, keyword) =>
    `${config.API_URL}/berita/search/${keyword}?page=${page}`,
  getAllNews: (val) => `${config.API_URL}/berita?page=${val}`,
};

export default api;
