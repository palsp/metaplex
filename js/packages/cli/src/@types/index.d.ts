interface UploadV2 {
  files: string[];
  cacheName: string;
  env: string;
  totalNFTs: number;
  storage: string;
  retainAuthority: boolean;
  mutable: boolean;
  nftStorageKey: string;
  ipfsCredentials: import('../helpers/upload/ipfs').ipfsCreds;
  awsS3Bucket: string;
  batchSize: number;
  price: import('@project-serum/anchor').BN;
  treasuryWallet: import('@solana/web3.js').PublicKey;
  splToken: import('@solana/web3.js').PublicKey;
  gatekeeper: null | {
    expireOnUse: boolean;
    gatekeeperNetwork: import('@project-serum/anchor').web3.PublicKey;
  };
  goLiveDate: null | import('@project-serum/anchor').BN;
  endSettings: null | [number, import('@project-serum/anchor').BN];
  whitelistMintSettings: null | {
    mode: any;
    mint: import('@solana/web3.js').PublicKey;
    presale: boolean;
    discountPrice: null | import('@project-serum/anchor').BN;
  };
  hiddenSettings: null | {
    name: string;
    uri: string;
    hash: Uint8Array;
  };
  uuid: string;
  walletKeyPair: import('@project-serum/anchor').web3.Keypair;
  anchorProgram: import('@project-serum/anchor').Program;
  arweaveJwk: string;
  rateLimit: number;
  customUrl: string;
  customImageUrl: string;
  imageType: string;
}

interface WriteIndices {
  anchorProgram: import('@project-serum/anchor').Program;
  cacheContent: any;
  cacheName: string;
  env: any;
  candyMachine: any;
  walletKeyPair: import('@project-serum/anchor').web3.Keypair;
  uploadSuccessful: boolean;
  rateLimit: number;
}
