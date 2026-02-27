import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    style: ['italic', 'normal'],
});

export const metadata: Metadata = {
    title: "CUP - Coffee Unite People",
    description: "Menjembatani budaya ngopi dengan interaksi sosial yang nyata.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.className} ${outfit.variable} ${playfair.variable} bg-white text-black antialiased`}>
                {children}
            </body>
        </html>
    );
}
