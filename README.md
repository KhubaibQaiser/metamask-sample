This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), deployed on [Vercel](https://web3-metamask-wallet.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About

Details:

1. A simple web app where user can click a button to connect to a web3 wallet (metamask).
2. After user gets connected, it shows what is the connected address, network (chain), and a button to disconnect it from the the wallet.
3. You can change the network (ethereum mainnet, rinkeby, ropsten). Whenever user change the network, the app detects the new network, and shows it.

## Tech Stack

- JavaScript - Because TS would have been an overkill
- React - UI Lib
- NextJS - React Framework
- zustand - State Management Lib
