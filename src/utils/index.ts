import crypto from "crypto";
import fs from "fs";
import path from "path";
import axios from "axios";
/**
 * This Method Computes the security credentials for all Initiator Related Calls
 *
 * @param certPath string
 * @param securityCredential
 * @return string
 */
const computeSecurityCredentials = (certPath: string, securityCredential: string) => {
    const bufferEncryption = Buffer.from(securityCredential);
    const data = fs.readFileSync(path.resolve(certPath));
    const privateKey = String(data);
    const encrypted  = crypto.publicEncrypt({
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_PADDING

    }, bufferEncryption);

    return encrypted.toString('base64');
}
/**
 * This Method is the base request method to send Https requests to the safaricom server
 *
 * @param baseUrl {string} - which is the specific endpoint for the Mpesa Api Item in play
 * @return Promise<AxiosInstance>
 */
const request = async (baseUrl: string) => {
    const credentials = await computeSecurityCredentials("home", "Welcome to My App");
    return axios.create({
        baseURL: baseUrl,
        timeout: 5000,
        headers: {
            'Authorization': `Bearer ${credentials}`,
            'Content-Type': 'application/json'
        }
    });
}

export default  {
    computeSecurityCredentials,
    request
}
