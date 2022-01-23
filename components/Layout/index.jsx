import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
