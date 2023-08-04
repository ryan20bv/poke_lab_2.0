"use client";

import indexStore from "../store/indexStore";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
	return <Provider store={indexStore}>{children}</Provider>;
}
