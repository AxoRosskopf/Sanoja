import "./globals.css";
import Navbar from "components/Navbar";
import Top from "components/Top";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Top />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
