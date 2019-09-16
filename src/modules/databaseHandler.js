import {config} from "../constants/config";
import axios from "axios";

const API_URL = config.API_URL;
const AUTH_TOKEN = config.AUTH_TOKEN;

//todo unit tests
//SingletonClass handler class
class DatabaseClient {
    constructor() {
        if (!!DatabaseClient.instance) {
            return DatabaseClient.instance;
        }

        DatabaseClient.instance = this;
        return this._init();
    }

    _init = () => {
        return axios.create({
            baseURL: API_URL,
            headers: {
                Authorization: AUTH_TOKEN,
            },
        });
    }
}


export {DatabaseClient}