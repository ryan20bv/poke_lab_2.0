"use client";

// !this is with persistent storage

/* import { indexStore, persistor } from "../store/indexStore";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={indexStore}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				{children}
			</PersistGate>
		</Provider>
	);
} */

// !this is with out persistent store

import indexStore from "../store/indexStore";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
	return <Provider store={indexStore}>{children}</Provider>;
}
