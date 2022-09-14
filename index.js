
// 1. Declare global variable to store the web3 instance

let PetContract;

// 2. Set contract address and ABI
const Pet_Contract_Address = "";
const Pet_Contract_ABI = [];

/* 3. Prompt user to sign in to MetaMask */
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli")
    provider.send("eth_requestAccount", []).then(() => {
    provider.listAccounts().then((accounts) => {
        const signer = provider.getSigner(accounts[0]);


    /* 3.1 Create Instance of Pet Smart Contract */
    PetContract = new ether.Contract(
        Pet_Contract_Address,
        Pet_Contract_ABI,
        signer
        ); 

    });
});

// 4.  Creating variables for reusable dom elements
const petFormSection = document.querySelector(".pet-form-section");
const showPetFormBtn = document.querySelector(".show-pet-form-btn");
const petSection = document.querySelector(".pet-detail-section");
const setPetButton = document.querySelector("#set-new-pet");
const refreshBtn = document.querySelector(".refresh-pet-details-btn");


/* 5. Function to set pet details */
const setNewPet = () => {
    // update button value
    setPetButton.value = "Setting Pet...";
}

/* 5.1 Get inputs from pet form */
const petNameInput = document.querySelector("#pet-name");
const petOwnerInput = document.querySelector("#pet-owner");
const petAgeInput = document.querySelector("#pet-age");

/* 5.2 Getting values from the inputs */




/* *** IN THE ABOVE CODE:
1. WE'RE MAKING THE PetContract VARIABLE GLOBAL BECAUSE WE'LL REUSE IT IN OTHER FUNCTIONS

2. PROVIDE YOUR SMART CONTRACT ADDRESS AND ABI IN THE Pet_Contract_Address AND Pet_Contract_ABI
*/