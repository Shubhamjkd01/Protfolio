import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Raj | AI & Python Developer",
  description:
    "AI & Python Developer building AI agents, RAG systems, machine learning applications, automation tools, APIs and backend systems.",
  metadataBase: new URL("https://shubhamraj.dev"),
  openGraph: {
    title: "Shubham Raj | AI & Python Developer",
    description:
      "Practical AI systems, automation workflows and backend engineering with Python.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
