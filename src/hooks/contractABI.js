export const crowdfundABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_idx',
        type: 'uint256',
      },
    ],
    name: 'delFundingItems',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_userAddr',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'pushFundInfoToUser',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_tgAmt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_mxAmt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_mnAmt',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_imgUrl',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_startTime',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_endTime',
        type: 'uint256',
      },
    ],
    name: 'setCrowdfund',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
    ],
    name: 'setCrowdfundStatusByTime',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
    ],
    name: 'setFund',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
      {
        internalType: 'string[]',
        name: '_content',
        type: 'string[]',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'enum CrowdfundContract.eOptions[]',
        name: '_options',
        type: 'uint8[]',
      },
    ],
    name: 'setFundingItems',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
    ],
    name: 'setFundStatusToWaiting',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_userAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_points',
        type: 'uint256',
      },
    ],
    name: 'setPointAdd',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_userAddr',
        type: 'address',
      },
      {
        internalType: 'int256',
        name: '_points',
        type: 'int256',
      },
    ],
    name: 'setPointSub',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_nickName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_email',
        type: 'string',
      },
    ],
    name: 'setUser',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_userAddr',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
      {
        internalType: 'bool',
        name: '_side',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_count',
        type: 'uint256',
      },
    ],
    name: 'setVotingInfo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
      {
        internalType: 'bool',
        name: '_vote',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_count',
        type: 'uint256',
      },
    ],
    name: 'voteCrowdfund',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'getCrowdfundByIdx',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'filmName',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'director',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'targetAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'imgUrl',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'startTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endTime',
            type: 'uint256',
          },
          {
            internalType: 'enum CrowdfundContract.eStatus',
            name: 'status',
            type: 'uint8',
          },
          {
            internalType: 'address[]',
            name: 'aPros',
            type: 'address[]',
          },
          {
            internalType: 'uint256',
            name: 'pros',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'aCons',
            type: 'address[]',
          },
          {
            internalType: 'uint256',
            name: 'cons',
            type: 'uint256',
          },
        ],
        internalType: 'struct CrowdfundContract.sCrowdfund',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
    ],
    name: 'getCrowdfundIdxByFilmName',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
    ],
    name: 'getEndTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
    ],
    name: 'getFundingItems',
    outputs: [
      {
        components: [
          {
            internalType: 'string[]',
            name: 'content',
            type: 'string[]',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'enum CrowdfundContract.eOptions[]',
            name: 'rewards',
            type: 'uint8[]',
          },
        ],
        internalType: 'struct CrowdfundContract.sFundingItem[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
    ],
    name: 'getsCrowdfundByKeyValue',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'filmName',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'director',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'targetAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAmount',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'imgUrl',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'startTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endTime',
            type: 'uint256',
          },
          {
            internalType: 'enum CrowdfundContract.eStatus',
            name: 'status',
            type: 'uint8',
          },
          {
            internalType: 'address[]',
            name: 'aPros',
            type: 'address[]',
          },
          {
            internalType: 'uint256',
            name: 'pros',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'aCons',
            type: 'address[]',
          },
          {
            internalType: 'uint256',
            name: 'cons',
            type: 'uint256',
          },
        ],
        internalType: 'struct CrowdfundContract.sCrowdfund',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
    ],
    name: 'getStartTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
    ],
    name: 'getTargetAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_filmName',
        type: 'string',
      },
    ],
    name: 'getTotalAmountByFilmName',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_userAddr',
        type: 'address',
      },
    ],
    name: 'getUser',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'nickName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'points',
            type: 'uint256',
          },
          {
            internalType: 'string[]',
            name: 'aFundedList',
            type: 'string[]',
          },
          {
            internalType: 'string[]',
            name: 'aCrowdfundVoteList',
            type: 'string[]',
          },
        ],
        internalType: 'struct CrowdfundContract.sUser',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];