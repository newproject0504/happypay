export type Tasktype = {
    id: string;
    image: string;
    title: string;
    taskType: string;
    tasksubType: string;
    amount: number;
    position: number;
    createdAt: string;
    status: string
    shortDescription: string;
    description: string;
    yourProfit: string;
    youtubeLink: string;
    profitTrackingTime: string;
    profitPiadBy: string;
    ageGroup: string;
    specifications: string;
    instructions: string;
    termsAndConditions: string;
};

export type TaskTransaction = {
    id: string
    amount: number
    date: string
    userName: string
    taskName: string
    phone: string
    pan: string
    status: string
    paymentStatus: string
    user?: {
        id: string
    }
    task?: {
        id: string
    }
}

export type BankDetails = {
    id: string
    ifcsCode: string
    userName: string
    bankName: string
}

export type WalletTransaction = {
    id: string,
    amount: number
    fee: number
    payable: number
    type: string
    transactionId: string,
    user: {
        id: string
    }
    status: string
}