type Tasktype = {
  id: string;
  image: string;
  title: string;
  taskType: string;
  tasksubType: string;
  amount: string;
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

type TaskTransaction = {
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
    phone: string
  }
  task?: {
    id: string
  }
}

type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  address?: string
  pincode?: string
  dob?: string
  gender?: string
  panCardNumber?: string
  panCardImage?: string
  AadhaarCardNumber?: string
  AadhaarCardImage?: string
  college?: string
  branch?: string
  passout?: string
  rollNo?: string
  collegeId?: string
  wallet?: number
  totalEarnings: number
  bankDetails?: BankDetails
}

type BankDetails = {
  id: string
  ifcsCode: string
  userName: string
  bankName: string
}

type WalletTransaction = {
  id: string,
  amount: number
  fee: number
  payable: number
  type: String
  transactionId: string,
  user: {
      id: string
      username?: string
  }
  status: string
}
