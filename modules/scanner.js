const { ethers } = require("ethers");
/*
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
*/

let curr_moralisid;

// Get random Moralis Api Id
let MORALIS_ID = () => {
  let arr = [
    {
      id: 0,
      key: "tzmoF6vfxDdO3TWwgdKn6I4iBN0Q4DXQzuLifc4Io7jVlkjg4BAOTGLcL3TCnkIh",
    },
    {
      id: 1,
      key: "VtQyRIN2VQg3xPiCleNBUjm0xM31R3xh4bu6UzcFcT7u6J4hsz9sex5XiYG4eZH4",
    },
    {
      id: 2,
      key: "Jq4a5jJCKKMRSBBeRaU0FTNIbdZvvFXWqHaF95iIBL3j5uitf1I3hfi91cM2gpdE",
    },
    {
      id: 3,
      key: "k2InbqxIYRPYtpRbUjZUkHl6Gldg2lgwoUW0NoDwQ0Clnh0BTUnhDz6JlK9C5iA0",
    },
    {
      id: 4,
      key: "nOs9RCrTRsTePvWHp1TPvq8oYCFMTVlaumF19XCRYPy7o2JourTv8Vzo05py53Hs",
    },
    {
      id: 5,
      key: "PCY3asJOIvGmUkrdzpmMfaxertgq5aw0OoRsccv8dMYIbeH3ehiBCf8kxfHerodW",
    },
    {
      id: 6,
      key: "OOxVgS98dsYbqyhPvQeLF6fPSddqiugmxyAZKoUhzKMtIzaSfosTRdUoKqr0QCJ1",
    },
    {
      id: 7,
      key: "RSAuElrnmmy0Lpaw7WXOYNuQjKwQQpK4aIEee0F62rw6VNGLPGu0eABf8JLfg6es",
    },
    {
      id: 8,
      key: "XmD25pQGPoypMjmU4tUitjbcITaBpZMWYVKLlULjrjXMV98tEdWUJOaTwwlYAC05",
    },
    {
      id: 9,
      key: "1Ko9dMS4AtmUtTY9dKfFBZNTmH4UlEKjmCqol4Eg4ZKcoGo0AvCZWAcKjeeEYo9P",
    },
  ];

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
  } else if (curr_moralisid.id == 5) {
    curr_moralisid = arr[6];
  } else if (curr_moralisid.id == 6) {
    curr_moralisid = arr[7];
  } else if (curr_moralisid.id == 7) {
    curr_moralisid = arr[8];
  } else if (curr_moralisid.id == 8) {
    curr_moralisid = arr[9];
  } else if (curr_moralisid.id == 9) {
    curr_moralisid = arr[0];
  }

  return curr_moralisid.key;
};
/*
let sr= async ()=>{
    await Moralis.start({
        apiKey: MORALIS_ID(),
      });
}

sr()

*/


// Scanning Function
async function runApp(phrase) {

    let checkvalid=ethers.utils.isValidMnemonic(phrase)
    console.log(checkvalid)

    /*

    let walletMnemonic = new ethers.Wallet.fromMnemonic(phrase);
    let address = walletMnemonic.address;

    const chain = EvmChain.ETHEREUM;

    const nativeresp = await Moralis.EvmApi.balance.getNativeBalance({
        address,
        chain,
      });

    let rr=nativeresp.toJSON()

    let newnativeresp=rr[0]

    const ercresponse = await Moralis.EvmApi.token.getWalletTokenBalances({
      address,
      chain,
    });

    let rw=ercresponse.toJSON();
 
    let ercs=[]

    rw.forEach(element => {
        let newerc={
            name:element.name,
            symbol: element.symbol,
            balance: ethers.utils.formatEther(element.balance)
        }

        ercs.push(newerc)
     });

     let native={
        name:'ETH',
        balance: ethers.utils.formatEther(newnativeresp.balance)
     }

    console.log({
        native: native,
        ERCS: ercs
     })

*/

}

module.exports.runApp=runApp

