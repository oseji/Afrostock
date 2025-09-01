import type { Metadata } from "next";
import "./globals.css";
import { satoshiVariable } from "./fonts/satoshi";

export const metadata: Metadata = {
	title: "Afrostock",
	description: "A platform for Afrocentric stock photos",
	icons: {
		icon: "/logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${satoshiVariable.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
