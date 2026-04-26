import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getDict } from "@/lib/dict";

export default function NlLayout({ children }: { children: React.ReactNode }) {
  const dict = getDict("nl");
  return (
    <>
      <Nav dict={dict} locale="nl" />
      <main>{children}</main>
      <Footer dict={dict} locale="nl" />
    </>
  );
}
