import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getDict } from "@/lib/dict";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  const dict = getDict("en");
  return (
    <>
      <Nav dict={dict} locale="en" />
      <main>{children}</main>
      <Footer dict={dict} locale="en" />
    </>
  );
}
