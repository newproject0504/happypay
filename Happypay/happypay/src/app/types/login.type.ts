import { BankDetails, TaskTransaction, WalletTransaction } from "./tasks.type";

export type User = {
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
  totalEarnings?: number
  bankDetails?: BankDetails
  walletTransaction?: WalletTransaction[]
  taskTransactions?: TaskTransaction[]
}