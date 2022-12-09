import useMetaMask from "../../common/MetaMask/useMetaMask";

const MetaMaskWallet = () => {
  const { loading, error, isConnected, connect, disconnect, account, network } =
    useMetaMask();

  let content = <h2>Loading...</h2>;

  if (error) {
    content = <p>{error}</p>;
  } else if (!loading) {
    if (isConnected) {
      content = (
        <>
          <p>Account: {account}</p>
          <p>Network: {network}</p>
          <button onClick={disconnect}>Disconnect</button>
        </>
      );
    } else {
      content = <button onClick={connect}>Connect</button>;
    }
  }

  return <div className="container">{content}</div>;
};

export default MetaMaskWallet;
