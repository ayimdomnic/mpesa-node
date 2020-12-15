export interface C2b {
    
}

export interface C2bRegister {
    confirmationUrl: string;
    validationUrl: string;
    shortCode: string;
    responseType: string;
}

export interface C2bSimulate {
    ShortCode: string;
    CommandID: string;
    Amount: number,
    Msisdn: string,
    BillRefNumber: string
}
