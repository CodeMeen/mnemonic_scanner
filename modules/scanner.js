const axios = require("axios");
const { ethers } = require("ethers");

const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');
  // Get random Infura Api Id
let INFURA_ID=  ()=>{

    let arr=[
      {
        id: 0,
        key: 'b64a1f176b30451da06a45377bca23a2'
      },
      {
        id: 1,
        key: 'c8fd017cd19141b3853fe4f6b2b00a64'
      },
      {
        id: 2,
        key: '23e82254ea524275a81d798c5ca7f823'
      },
      {
        id: 3,
        key: '531b562a237a47d08310451c527b42c2'
      },
      {
        id: 4,
        key: '7bed890bbc8e483fb3332877ca59978d'
      },
      {
        id: 5,
        key: '432996da7f9e42f29e279638398a7b6b'
      },
      {
        id: 6,
        key: 'b84fbea41c68439e91db4951468e1b37'
      },
      {
        id: 7,
        key: 'f96ac4515fbf4da5bc0edcc51273ce74'
      },
      {
        id: 8,
        key: '968e9eb757ea4c37861d169fb9199f00'
      },
      {
        id: 9,
        key: '9cc4773c29c5435ab993e5c2c5031678'
      }
    ]
  
  
    if (!curr_infuraid || curr_infuraid == "") {
      curr_infuraid = arr[0];
    } else if (curr_infuraid.id == 0) {
      curr_infuraid = arr[1];
    } else if (curr_infuraid.id == 1) {
      curr_infuraid = arr[2];
    } else if (curr_infuraid.id == 2) {
      curr_infuraid = arr[3];
    } else if (curr_infuraid.id == 3) {
      curr_infuraid = arr[4];
    } else if (curr_infuraid.id == 4) {
      curr_infuraid = arr[5];
    }else if (curr_infuraid.id == 5) {
      curr_infuraid = arr[6];
    }else if (curr_infuraid.id == 6) {
      curr_infuraid = arr[7];
    }else if (curr_infuraid.id == 7) {
      curr_infuraid = arr[8];
    }else if (curr_infuraid.id == 8) {
      curr_infuraid = arr[9];
    }else if (curr_infuraid.id == 9) {
      curr_infuraid = arr[0];
    }
  
    return curr_infuraid.key
  
  }

  // Get random Moralis Api Id
  let MORALIS_ID=  ()=>{
    let arr=[
      {
        id: 0,
        key: 'tzmoF6vfxDdO3TWwgdKn6I4iBN0Q4DXQzuLifc4Io7jVlkjg4BAOTGLcL3TCnkIh'
      },
      {
        id: 1,
        key: 'VtQyRIN2VQg3xPiCleNBUjm0xM31R3xh4bu6UzcFcT7u6J4hsz9sex5XiYG4eZH4'
      },
      {
        id: 2,
        key: 'Jq4a5jJCKKMRSBBeRaU0FTNIbdZvvFXWqHaF95iIBL3j5uitf1I3hfi91cM2gpdE'
      },
      {
        id: 3,
        key: 'k2InbqxIYRPYtpRbUjZUkHl6Gldg2lgwoUW0NoDwQ0Clnh0BTUnhDz6JlK9C5iA0'
      },
      {
        id: 4,
        key: 'nOs9RCrTRsTePvWHp1TPvq8oYCFMTVlaumF19XCRYPy7o2JourTv8Vzo05py53Hs'
      },
      {
        id: 5,
        key: 'PCY3asJOIvGmUkrdzpmMfaxertgq5aw0OoRsccv8dMYIbeH3ehiBCf8kxfHerodW'
      },
      {
        id: 6,
        key: 'OOxVgS98dsYbqyhPvQeLF6fPSddqiugmxyAZKoUhzKMtIzaSfosTRdUoKqr0QCJ1'
      },
      {
        id: 7,
        key: 'RSAuElrnmmy0Lpaw7WXOYNuQjKwQQpK4aIEee0F62rw6VNGLPGu0eABf8JLfg6es'
      },
      {
        id: 8,
        key: 'XmD25pQGPoypMjmU4tUitjbcITaBpZMWYVKLlULjrjXMV98tEdWUJOaTwwlYAC05'
      },
      {
        id: 9,
        key: '1Ko9dMS4AtmUtTY9dKfFBZNTmH4UlEKjmCqol4Eg4ZKcoGo0AvCZWAcKjeeEYo9P'
      }
    ]
  
  
    if (!curr_moralisid || curr_moralisid == "") {
      curr_moralisid = arr[0];
    } else if (curr_moralisid.id == 0) {
      curr_moralisid = arr[1];
    } else if (curr_moralisid.id == 1) {
      curr_moralisid = arr[2];
    } else if (curr_moralisid.id == 2) {
      curr_moralisid = arr[3];
    } else if (curr_moralisid.id == 3) {
      curr_moralisid = arr[4];
    } else if (curr_moralisid.id == 4) {
      curr_moralisid = arr[5];
    }else if (curr_moralisid.id == 5) {
      curr_moralisid = arr[6];
    }else if (curr_moralisid.id == 6) {
      curr_moralisid = arr[7];
    }else if (curr_moralisid.id == 7) {
      curr_moralisid = arr[8];
    }else if (curr_moralisid.id == 8) {
      curr_moralisid = arr[9];
    }else if (curr_moralisid.id == 9) {
      curr_moralisid = arr[0];
    }
  
    return curr_moralisid.key
  
  }


  // Connect To Infura
const provider= ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${INFURA_ID()}`
  );


// Scanning Function
async function run(phrase){
    await Moralis.start({
        apiKey: MORALIS_ID()
      });

    
    let isValid = ethers.utils.isValidMnemonic(phrase);

    if(isValid==true){

       let walletMnemonic = new ethers.Wallet.fromMnemonic(phrase);

      let privatekey = walletMnemonic.privateKey.slice(2);
      let address = walletMnemonic.address;

   
    const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
    chain,
  });

   


    }else{

     throw 'invalid_phrase'


    }

}


module.exports.run=run