async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    "https://green-feather-340007.ap-south-1.aws.cloud.dgraph.io/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzL3Byb3h5IiwiZHVpZCI6IjB4MmQ0NmIyMCIsImV4cCI6MTY1MTQxODk5MiwiaXNzIjoicy9hcGkifQ._iT1tNHia9UhRjnXq6gPsULFNJKFJnYjQp5ztThIhDA"
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
  return fetchGraphQL(
    operationsDoc,
    "MyQuery",
    {}
  );
}

export const getUsers = () => {
  const operationsDoc = `
    query MyQuery {
      queryUser {
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
      }
    }
  `;
  return fetchGraphQL(
    operationsDoc,
    "MyQuery",
    {}
  );
}

export const createTask = (task:Tasktype) => {
  const operationsDoc = `
    mutation MyMutation {
      addTask(input: {id: "${task.id}", image: "${task.image}", title: "${task.title}", taskType: "${task.taskType}", amount: ${task.amount}, position: "${task.position}", ageGroup: "${task.ageGroup}", createdAt: "${task.createdAt}", description: "${task.description}", instructions: "${task.instructions}", profitPiadBy: "${task.profitPiadBy}", profitTrackingTime: "${task.profitTrackingTime}", shortDescription: "${task.shortDescription}", specifications: "${task.specifications}", status: "${task.status}", tasksubType: "${task.tasksubType}", termsAndConditions: "${task.termsAndConditions}", yourProfit: "${task.yourProfit}", youtubeLink: "${task.youtubeLink}"}){
        numUids
      }
    }
  `;
  return fetchGraphQL(
    operationsDoc,
    "MyMutation",
    {}
  );
}

export const updateTask = (task:Tasktype) => {
  const operationsDoc = `
    mutation MyMutation {
      updateTask(input: {filter: {id: {eq: "${task.id}"}}, set: {image: "${task.image}", title: "${task.title}", taskType: "${task.taskType}", amount: ${task.amount}, position: "${task.position}", ageGroup: "${task.ageGroup}", createdAt: "${task.createdAt}", description: "${task.description}", instructions: "${task.instructions}", profitPiadBy: "${task.profitPiadBy}", profitTrackingTime: "${task.profitTrackingTime}", shortDescription: "${task.shortDescription}", specifications: "${task.specifications}", status: "${task.status}", tasksubType: "${task.tasksubType}", termsAndConditions: "${task.termsAndConditions}", yourProfit: "${task.yourProfit}", youtubeLink: "${task.youtubeLink}"}}){
        numUids
      }
    }
  `;
  return fetchGraphQL(
    operationsDoc,
    "MyMutation",
    {}
  );
}

export const deleteTask = (task:Tasktype) => {
  const operationsDoc = `
    mutation MyMutation {
      deleteTask(filter: {id: {eq: "${task.id}"}}) {
        numUids
      }
    }
  `;
  return fetchGraphQL(
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
        user{
          id
          wallet
        }
      }
    }
  `;
  return fetchGraphQL(
    operationsDoc,
    "MyQuery",
    {}
  );
}

export const updateTaskTransaction = (task:TaskTransaction) => {
  const operationsDoc = `
    mutation MyMutation {
      updateTaskTransaction(input: {filter: {id: {eq: "${task.id}"}}, set: {paymentStatus: "${task.paymentStatus}", status: "${task.status}"}}){
        numUids
      }
    }
  `;
  return fetchGraphQL(
    operationsDoc,
    "MyMutation",
    {}
  );
}

export const getWalletTransaction = () => {
  const operationsDoc = `
    query MyQuery {
      queryWalletTransaction {
        id
        fee
        amount
        payable
        transactionId
        type
        status
        user {
          id
          username
        }
      }
    }
  `;
  return fetchGraphQL(
    operationsDoc,
    "MyQuery",
    {}
  );
}

export const updateWalletTransaction = (task:WalletTransaction) => {
  const operationsDoc = `
    mutation MyMutation {
      updateWalletTransaction(input: {filter: {id: {eq: "${task.id}"}}, set: {status: "${task.status}", transactionId: "${task.transactionId}"}}){
        numUids
      }
    }
  `;
  return fetchGraphQL(
    operationsDoc,
    "MyMutation",
    {}
  );
}

export const getUser = (id: string) => {
  const operationDoc = `
  query MyQuery {
    queryUser(filter: {id: {alloftext: "${id}"}}) {
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
        status
        transactionId
      }
    }
  }

  `;
  return fetchGraphQL(operationDoc, "MyQuery", {});
}

export const updateUserWallet = (wallet: number, userId: string) => {
  const doc = `
    mutation MyMutation {
      updateUser(input: {filter: {id: {eq: "${userId}"}},
      set: { wallet: ${wallet}}}) {
        numUids
      }
    }
  `;
  return fetchGraphQL(doc, "MyMutation", {});
}

export const addWalletTransactions = (wt: WalletTransaction) => {
  const operationsDoc = `
    mutation MyMutation {
      addWalletTransaction(input: {id: "${wt.id}", amount: ${wt.amount}, payable: ${wt.payable}, user: {id: "${wt.user.id}"}, status: "${wt.status}", fee: ${wt.fee}, transactionId: "${wt.transactionId}", type: "${wt.type}"}) {
        numUids
      }
    }
  `;
  return fetchGraphQL(
    operationsDoc,
    "MyMutation",
    {}
  );
}
