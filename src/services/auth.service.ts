import {Credentials} from "../interfaces/credentials";
import BaseService from "./base.service";

export default class AuthService {
    public accessToken: string;
    constructor(
        credentials: Credentials,
         environment: string) {

        const generate = new BaseService(credentials, environment)
        generate.authenticate().then((response) => {
            this.accessToken = response;
        })

    }

}