import axios from 'axios';

export const api = axios.create({ baseURL: "https://api.gvhelpdesk.net/smartbuyapi/hdfc/api/v1/home", headers: { "Access-Control-Allow-Origin": "*" } });