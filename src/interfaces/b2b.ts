export interface B2b {
    Initiator: string;
    SecurityCredential: string;
    CommandID: string;
    SenderIdentifierType: string;
    ReceiverIdentifierType: string;
    Amount: number;
    PartyA: string;
    PartyB: string;
    AccountReference: string;
    Remarks: string;
    QueueTimeoutURL: string;
    ResultUrl: string;
}