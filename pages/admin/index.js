import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import AdminLayout from "@components/Admin/AdminLayout";
// import Header from "@components/Header";
import Head from "@components/Head";
import { useRouter } from "next/router";

export default function Admin() {
  const router = useRouter();
  return (
    <>
      <Head />
      <Navbar />
      <AdminLayout />
      <Footer />
    </>
  );
}
