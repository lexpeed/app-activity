"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/state/store";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Providers;
