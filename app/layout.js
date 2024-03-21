import "@/styles/reset.css";
import "@/styles/global.css";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
