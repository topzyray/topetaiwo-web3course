# My DApp App

This is a decentralized application (DApp) that allows users to connect their Ethereum wallet (e.g., MetaMask), view their account balance, and send ETH to any valid Ethereum address. It is built using `ethers.js` and Vite with Vanilla JavaScript.

## Features

- **Connect Wallet**: Users can connect their Ethereum wallet using MetaMask.
- **View Balance**: Displays the ETH balance of the connected wallet.
- **Send ETH**: Enables users to send ETH to any valid Ethereum address.

## Prerequisites

- Node.js and npm installed on your system.
- MetaMask installed in your browser.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/topzyray/topetaiwo-web3course.git
   ```

2. Naviage to the project directory:
   ```bash
   cd final-project
   ```
3. Install depencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open the app in your browser:
   ```bash
   http://localhost:5173
   ```

## How to Use

1. Open the app in your browser.
2. Click the Connect Wallet button to link your Ethereum wallet using MetaMask.
3. View your connected wallet address and ETH balance.
4. To send ETH:

   - Enter the recipient's Ethereum address.
   - Enter the amount of ETH to send.
   - Click the Send button.

## Technologies Used

- Vite: For a fast development environment.
- Vanilla JavaScript: For building the frontend.
- ethers.js: For interacting with the Ethereum blockchain.

## Project Structure

    .
    ├── index.html # Main HTML file
    ├── src/main.js # JavaScript logic using ethers.js
    ├── src/style.css # Styling for the DApp
    └── package.json # Project configuration

## Notes

- Ensure MetaMask is installed and connected to an Ethereum network.
- This DApp only supports MetaMask for wallet connection.
