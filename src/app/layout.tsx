import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "PokeLab",
	description: "Pokemon Api Version 2 with graphs",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-[#DFE6F0]`}
				suppressHydrationWarning={true}
			>
				{children}
			</body>
		</html>
	);
}
