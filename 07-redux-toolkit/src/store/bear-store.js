import { create } from "zustand";

const useStore = create((set) => ({
  bears: 0,
  increaseBear: () => {
    set(() => ({ bears: state.bears + 1 }));
  },
  removeBear: () => {
    set(() => ({ bears: state.bears - 1 }));
  },
}));
