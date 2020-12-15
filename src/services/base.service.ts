import {Credentials} from "../interfaces/credentials";
import {routes} from "../urls";
import { computeSecurityCredentials } from "../utils";
import axios from "axios";

export default class BaseService {
    private baseUrl: string;
    private environment: string;
    private clientKey: string;
    private clientSecret: string;
    private securityCredential: string;

    constructor(
        credentials: Credentials,
        environment: string
    ) {
        this.clientKey = credentials.clientKey;
        this.clientSecret = credentials.clientKey;
        this.baseUrl = environment === "live" ? routes.production : routes.sandbox;

        if (!credentials?.securityCredential) {
            computeSecurityCredentials(credentials.initiatorPassword, credentials.certificatePath)
        } else {
            this.securityCredential = credentials.securityCredential
        }
    }

    public authenticate(): Promise<string> {
        return new Promise((resolve, reject) => {
            axios({
                method: "get",
                url: this.baseUrl + routes.oauth,
                headers: {
                    Authorization:
                        "Basic " + Buffer.from(this.clientKey + ":" + this.clientSecret).toString(
                            "base64"
                        ),
                }
            })
                .then((response) => {
                    // resolve(response.data.access_token);
                    return response.data.access_token
                })
                .catch((error) => {
                    reject(error.response)
                });
        });
    }


}