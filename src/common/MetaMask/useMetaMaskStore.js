import create from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  isConnected: false,
  account: null,
  network: null,
  loading: true,
  error: "",
};

const useMetaMaskStore = create(
  persist(
    (set) => ({
      ...initialState,
      setConnected: (isConnected) => set({ isConnected }),
      setAccount: (account) => set({ account }),
      setNetwork: (network) => set({ network }),
      disconnect: () => set({ ...initialState, loading: false }),
      setLoading: (loading) => set({ loading }),
      setError: (msg) => set({ error: msg }),
    }),
    {
      name: "metamask-storage",
    }
  )
);

export default useMetaMaskStore;
