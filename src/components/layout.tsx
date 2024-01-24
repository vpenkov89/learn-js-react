import { Footer } from "./footer/footer";
import { Header } from "./header/header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
        <div>{children}</div>
      <Footer />
    </div>
  );
};
