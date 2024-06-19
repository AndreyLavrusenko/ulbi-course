import axios from "axios";
import { LOCALSTORAGE_USER_KEY } from "shared/const/localstorage";

const baseUrl = __IS_DEV__ ? "http://localhost:8000" : "https://production";

export const $api = axios.create({
    baseURL: baseUrl,
    headers: {
        authorization: localStorage.getItem(LOCALSTORAGE_USER_KEY),
    },
});
