let API_URL = ``;
let APP_URL = ``;

if (
  window.location.origin.includes(`127`) ||
  window.location.origin.includes(`localhost`)
) {
  API_URL = `http://127.0.0.1:8000/api`;
  APP_URL = `http://127.0.0.1:8000`;
} else {
  API_URL = `${window.location.origin}/auth/api`;
  APP_URL = `${window.location.origin}/auth`;
}

const config = {
  API_URL,
  APP_URL,
};

export default config;
