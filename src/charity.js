import web3 from './web3';


const address = "0xC71d92dCFA3C0932C0A77EF51FfdE3fcd912d69C";

const abi =[
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      }
    ],
    "name": "addNewBenifactor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      }
    ],
    "name": "addNewDonor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "desc",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amtReq",
        "type": "uint256"
      }
    ],
    "name": "addNewProject",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "approvProject",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "pId",
        "type": "uint256"
      }
    ],
    "name": "donate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "donateEther",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "benifactorName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "benifactorAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "benifactorEmail",
        "type": "string"
      }
    ],
    "name": "newBenifactorAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "donorName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "donorAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "donorEmail",
        "type": "string"
      }
    ],
    "name": "newDonorAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "projectId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "projectName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "createrAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "projectDescription",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountRequire",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isCompleted",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountGot",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isApproved",
        "type": "bool"
      }
    ],
    "name": "newProjectAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "projectId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "projectName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "createrAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "projectDescription",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountRequire",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isCompleted",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountGot",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isApproved",
        "type": "bool"
      }
    ],
    "name": "projectApproved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "message",
        "type": "string"
      }
    ],
    "name": "returnMessage",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "string",
        "name": "adminName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "adminEmail",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "adminAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "benifactors",
    "outputs": [
      {
        "internalType": "string",
        "name": "benifactorName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "benifactorAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "benifactorEmail",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "charityProjects",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "projectId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "projectName",
        "type": "string"
      },
      {
        "internalType": "address payable",
        "name": "createrAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "projectDescription",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amountRequire",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isCompleted",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "amountGot",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isApproved",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "donors",
    "outputs": [
      {
        "internalType": "string",
        "name": "donorName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "donorAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "donorEmail",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "participatedCount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAdmin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalProjects",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

export default new web3.eth.Contract(abi,address);





























