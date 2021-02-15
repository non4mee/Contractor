import axios from "axios";

export const URL = "http://phplaravel-466997-1463969.cloudwaysapps.com";
export const API_URL = "http://phplaravel-466997-1463969.cloudwaysapps.com/api/contractor/account/show";
export const my_app = axios.create({baseURL: API_URL});
