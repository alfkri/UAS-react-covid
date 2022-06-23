// Membuat variable 

// Membuat variable URL API: BASE_URL
const BASE_URL = "https://covid19.mathdro.id/api";


// Membuat Variable Endpoints (object)
const ENDPOINTS = {
  DATAGLOBAL: `${BASE_URL}/`,
  STATGAMBAR1: `${BASE_URL}/og`,
  DATAINDONESIA: `${BASE_URL}/countries/indonesia`,
  STATGAMBAR2: `${BASE_URL}/countries/indonesia/og`
};

export default ENDPOINTS;