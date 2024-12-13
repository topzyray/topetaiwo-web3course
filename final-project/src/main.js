import { ethers } from "ethers";

const connectWalletButton = document.getElementById("connectWallet");
const accountDisplay = document.getElementById("account");
const balanceDisplay = document.getElementById("balance");
const sendEthForm = document.getElementById("sendEthForm");
const recipientInput = document.getElementById("recipient");
const amountInput = document.getElementById("amount");
const sendEthButton = document.getElementById("sendEth");

let provider, signer;

// Connect Wallet
connectWalletButton.addEventListener("click", async () => {
  if (!window.ethereum) {
    alert("MetaMask is required to use this DApp!");
    return;
  }

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();

    const address = await signer.getAddress();
    accountDisplay.textContent = `Account: ${address}`;

    const balance = await provider.getBalance(address);
    balanceDisplay.textContent = `Balance: ${ethers.utils.formatEther(balance)} ETH`;

    sendEthForm.style.display = "block";
  } catch (error) {
    console.error(error);
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
    console.error(error);
    alert("Failed to send transaction");
  }
});
