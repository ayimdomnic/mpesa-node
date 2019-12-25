export const routes = {
    production: "https://api.safaricom.co.ke",
    sandbox: "https://sandbox.safaricom.co.ke",
    oauth: "/oauth/v1/generate?grant_type=client_credentials",
    b2c: "/mpesa/b2c/v1/paymentrequest",
    b2b: "/mpesa/b2b/v1/paymentrequest",
    register: "/mpesa/c2b/v1/registerurl",
    simulate: "/mpesa/c2b/v1/simulate",
    account_balance: "/mpesa/accountbalance/v1/query",
    transaction_status: "/mpesa/transactionstatus/v1/query",
    reversal: "/mpesa/reversal/v1/request",
    stk_push: "/mpesa/stkpush/v1/processrequest",
    stk_query: "/mpesa/stkpushquery/v1/query"
};
