import * as React from "react";
import { useRouter } from "next/router";
import useMetaMaskStore from "./useMetaMaskStore";

const useMetaMask = () => {
  const router = useRouter();
  const ethereumRef = React.useRef(null);

  const {
    isConnected,
    account,
    network,
    loading,
    error,
    setConnected,
    setAccount,
    setNetwork,
    disconnect,
    setLoading,
    setError,
  } = useMetaMaskStore((state) => state);

  const handleAccount = (accounts) => {
    setAccount(accounts?.[0]);
  };

  const handleNetwork = (chain) => {
    setNetwork(chain);
  };

  const handleNetworkChange = (chain) => {
    handleNetwork(chain);
    router.reload();
  };

  const connect = async () => {
    if (!ethereumRef.current) return false;

    ethereumRef.current
      .request({
        method: "eth_requestAccounts",
        params: [],
      })
      .then(handleAccount)
      .catch((e) => console.error("request accounts ERR", e));

    ethereumRef.current
      .request({
        method: "eth_chainId",
        params: [],
      })
      .then(handleNetwork)
      .catch((e) => console.error("request chains ERR", e));

    setConnected(ethereumRef.current.isConnected());
    setError("");
  };

  React.useEffect(() => {
    setLoading(false);

    if (!window.ethereum) {
      setError("Please install MetaMask!");
      return;
    }

    ethereumRef.current = window.ethereum;
    ethereumRef.current.addListener("accountsChanged", handleAccount);
    ethereumRef.current.addListener("chainChanged", handleNetworkChange);

    return () => {
      ethereumRef.current.removeAllListeners();
    };
  }, []);

  return {
    loading,
    error,
    connect,
    disconnect,
    isConnected,
    account,
    network,
  };
};

export default useMetaMask;
