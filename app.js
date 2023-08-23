app.js
// app.js
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract address
const abi = [...]; // Replace with your contract ABI

const web3 = new web3(web3.givenProvider);
const contract = new web3.eth.Contract(abi, contractAddress);

async function updateBalance() {
    const balance = await contract.methods.getBalance().call({ from: ethereum.selectedAddress });
    document.getElementById('balance').textContent = web3.utils.fromWei(balance, 'ether');
}

async function deposit() {
    const amount = document.getElementById('depositAmount').value;
    const weiAmount = web3.utils.toWei(amount, 'ether');
    
    await contract.methods.deposit().send({ value: weiAmount, from: ethereum.selectedAddress });
    updateBalance();
}

async function withdraw() {
    const amount = document.getElementById('withdrawAmount').value;
    const weiAmount = web3.utils.toWei(amount, 'ether');

    await contract.methods.withdraw(weiAmount).send({ from: ethereum.selectedAddress });
    updateBalance();
}

// Initialize when the page loads
window.onload = async () => {
    if (ethereum && ethereum.isMetaMask) {
        await ethereum.enable();
        updateBalance();
    } else {
        console.error('MetaMask not detected');
    }
    // Check if MetaMask is installed and connected
async function checkMetaMask() {
    const provider = await detectEthereumProvider();
    
    if (provider) {
        // MetaMask is installed
        // You can now interact with MetaMask and Ethereum
    } else {
        // MetaMask is not installed or not enabled
        console.error('Please install MetaMask');
    }
    async function requestConnection() {
        const provider = await detectEthereumProvider();
        
        if (provider) {
            try {
                // Request the user's permission to connect
                await ethereum.request({ method: 'eth_requestAccounts' });
                
                // MetaMask is now connected
                console.log('Connected to MetaMask');
            } catch (error) {
                // User rejected the connection request
                console.error('Connection request rejected');
            }
        } else {
            console.error('Please install MetaMask');
        }
    }
    
}

// Call the function to check MetaMask status
checkMetaMask();

};
