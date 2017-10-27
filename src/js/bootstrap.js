window.$ = window.jQuery = require('jquery');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = document.head.querySelector('meta[name="api-url"]').content;
window.axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("mbl_api_token");
window.axios.defaults.headers.common['ApiToken'] = "Bearer " + localStorage.getItem("mbl_api_token");
