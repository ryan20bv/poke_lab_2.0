"use client";

import { indexStore, persistor } from "../store/indexStore";
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
}
