import { ethers } from "ethers";

const connectWalletButton = document.getElementById("connectWallet");
const accountDisplay = document.getElementById("account");
const balanceDisplay = document.getElementById("balance");
const sendEthForm = document.getElementById("sendEthForm");
const recipientInput = document.getElementById("recipient");
const amountInput = document.getElementById("amount");
const sendEthButton = document.getElementById("sendEth");

let provider, signer;
console.log("ethers:", ethers); // Should not be undefined
console.log("window.ethereum:", window.ethereum); // Should not be undefined

// Connect Wallet
connectWalletButton.addEventListener("click", async () => {
  if (!window.ethereum) {
    alert("MetaMask is required to use this DApp!");
    return;
  }

  try {
    // Initialize provider and signer
    // provider = new ethers.providers.Web3Provider(window.ethereum);
    provider = new ethers.providers.Web3Provider(window.ethereum)
    
    await provider.send("eth_requestAccounts", []);
    
    signer = provider.getSigner();

    // Request account access
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Get connected address
    const address = await signer.getAddress();
    accountDisplay.textContent = `Account: ${address}`;

    // Get and display balance
    const balance = await provider.getBalance(address);
    balanceDisplay.textContent = `Balance: ${ethers.utils.formatEther(balance)} ETH`;

    // Show the send ETH form
    sendEthForm.style.display = "block";
  } catch (error) {
    console.error("Failed to connect wallet:", error);
    alert("Failed to connect wallet");
  }
});

// Send ETH
sendEthButton.addEventListener("click", async () => {
  const recipient = recipientInput.value;
  const amount = amountInput.value;

  if (!ethers.utils.isAddress(recipient)) {
    alert("Invalid recipient address");
    return;
  }

  try {
    // Send transaction
    const tx = await signer.sendTransaction({
      to: recipient,
      value: ethers.utils.parseEther(amount),
    });

    alert(`Transaction sent! Hash: ${tx.hash}`);
    await tx.wait();
    alert("Transaction confirmed!");

    // Update balance
    const address = await signer.getAddress();
    const balance = await provider.getBalance(address);
    balanceDisplay.textContent = `Balance: ${ethers.utils.formatEther(balance)} ETH`;
  } catch (error) {
    console.error("Failed to send transaction:", error);
    alert("Failed to send transaction");
  }
});
