import { User } from "../types/login.type";
import { BankDetails, TaskTransaction, WalletTransaction } from "../types/tasks.type";

export const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzL3Byb3h5IiwiZHVpZCI6IjB4MmQ0NmIyMCIsImV4cCI6MTY0MDA5NzY3NiwiaXNzIjoicy9hcGkifQ.6Dmtld4d4wB78R5_zOFrPugrfc5qFE4zQBq_NHZNYyg';
export const HOME = 'sarvekshaHome';
export const ABOUT = 'sarvekshaAbout';

export const fetchGraphQl = async (operationsDoc, operationName, variables) => {
  const result = await fetch(
    "https://green-feather-340007.ap-south-1.aws.cloud.dgraph.io/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": API_KEY
      },
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  );

  return await result.json();
}

export const getHome = () => {
  const operationsDoc = `
    query MyQuery {
      getHome(id: "sarvekshaHome") {
        cardsJSON
        mainContent
      }
    }
  `;
  return fetchGraphQl(operationsDoc, "MyQuery", {});
}


export const getAbout = () => {
  const operationsDoc = `
    query MyQuery {
      getAbout(id: "sarvekshaAbout") {
        title
        title2
        content
        content2
        image
        instructorsJSON
      }
    }
  `;
  return fetchGraphQl(operationsDoc, "MyQuery", {});
}


export const getPlacements = () => {
  const operationsDoc = `
    query MyQuery {
      getPlacements(id: "sarvekshaPlacements") {
        videoLink
        image
        studentsJSON
      }
    }
  `;
  return fetchGraphQl(operationsDoc, "MyQuery", {});
}


export const getCourses = () => {
  const operationsDoc = `
    query MyQuery {
      queryCourses {
        id
        QNA
        discount
        description
        duration
        image
        instructor
        lessons
        name
        outcomes
        position
        poster
        price
        requirements
      }
    }
  `;
  return fetchGraphQl(operationsDoc, "MyQuery", {});
}

export const addUser = (user: User) => {
  const operationDoc = `
    mutation MyMutation {
      addUser(input: {id: "${user.id}", username: "${user.username}", password: "${user.password}", phone: "${user.phone}", email: "${user.email}", wallet: ${0}, totalEarnings: ${0}}) {
        numUids
      }
    }  
  `;
  return fetchGraphQl(operationDoc, "MyMutation", {});
}

export const getUser = (username: string) => {
  const operationDoc = `
  query MyQuery {
    queryUser(filter: {phone: {alloftext: "${username}"}}) {
      id
      college
      AadhaarCardImage
      AadhaarCardNumber
      address
      branch
      collegeId
      dob
      email
      gender
      panCardImage
      panCardNumber
      passout
      password
      phone
      pincode
      rollNo
      username
      wallet
      totalEarnings
      bankDetails {
        bankName
        id
        ifcsCode
        userName
      }
      walletTransaction {
        amount
        payable
        fee
        id
        type
        status
        transactionId
      }
      taskTransactions {
        id
        pan
        paymentStatus
        date
        amount
        phone
        status
        taskName
        userName
      }
    }
  }
  
  `;
  return fetchGraphQl(operationDoc, "MyQuery", {});
}

export const updateUser = (user: User) => {
  if(!user.bankDetails) {
    user.bankDetails = {
      bankName: "",
      id: "",
      ifcsCode: "",
      userName: ""
    };
    if(!user.wallet) user.wallet = 0;
    if(!user.totalEarnings) user.totalEarnings = 0;
  }
  const doc = `
    mutation MyMutation {
      updateUser(input: {filter: {id: {eq: "${user.id}"}}, 
      set: {username: "${user.username}", rollNo: "${user.rollNo}", pincode: "${user.pincode}", 
      password: "${user.password}", passout: "${user.passout}", panCardNumber: "${user.panCardNumber}", panCardImage: "${user.panCardImage}", 
      gender: "${user.gender}", email: "${user.email}", collegeId: "${user.collegeId}", college: "${user.college}", branch: "${user.branch}", address: "${user.address}", 
      AadhaarCardNumber: "${user.AadhaarCardNumber}", AadhaarCardImage: "${user.AadhaarCardImage}", wallet: ${user.wallet}, totalEarnings: ${user.totalEarnings} ,bankDetails: { bankName: "${user.bankDetails.bankName}", id: "${user.bankDetails.id}", ifcsCode: "${user.bankDetails.ifcsCode}", userName: "${user.bankDetails.userName}"}}}) {
        numUids
      }
    }
  `;
  return fetchGraphQl(doc, "MyMutation", {});
}


export const getTasks = () => {
  const operationsDoc = `
    query MyQuery {
      queryTask {
        ageGroup
        amount
        createdAt
        description
        id
        image
        instructions
        position
        profitPiadBy
        profitTrackingTime
        shortDescription
        specifications
        status
        taskType
        tasksubType
        title
        termsAndConditions
        yourProfit
        youtubeLink
      }
    }
    `;
  return fetchGraphQl(
    operationsDoc,
    "MyQuery",
    {}
  );
}

export const addTaskTransaction = (taskTransaction: TaskTransaction) => {
  const operationsDoc = `
    mutation MyMutation {
      addTaskTransaction(input: {id: "${taskTransaction.id}", amount: ${taskTransaction.amount}, date: "${taskTransaction.date}", userName: "${taskTransaction.userName}", taskName: "${taskTransaction.taskName}", phone: "${taskTransaction.phone}", pan: "${taskTransaction.pan}", status: "${taskTransaction.status}", paymentStatus: "${taskTransaction.paymentStatus}", user: {id: "${taskTransaction.user.id}"}, task: {id: "${taskTransaction.task.id}"}}) {
        numUids
      }
    }
  `;
  return fetchGraphQl(
    operationsDoc,
    "MyMutation",
    {}
  );
}

export const getTaskTransaction = () => {
  const operationsDoc = `
    query MyQuery {
      queryTaskTransaction {
        id
        pan
        amount
        date
        paymentStatus
        phone
        status
        taskName
        userName
      }
    }
  `;
  return fetchGraphQl(
    operationsDoc,
    "MyQuery",
    {}
  );
}

export const addWalletTransactions = (wt: WalletTransaction) => {
  const operationsDoc = `
    mutation MyMutation {
      addWalletTransaction(input: {id: "${wt.id}", amount: ${wt.amount}, payable: ${wt.payable}, user: {id: "${wt.user.id}"}, status: "${wt.status}", fee: ${wt.fee}, transactionId: "${wt.transactionId}", type: "${wt.type}"}) {
        numUids
      }
    }
  `;
  return fetchGraphQl(
    operationsDoc,
    "MyMutation",
    {}
  );
}
