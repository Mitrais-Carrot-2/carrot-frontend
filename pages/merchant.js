import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Merchant from "@components/Merchant/Merchant";
// import Header from "@components/Header";
import Head from "@components/Head";
import { useRouter } from "next/router";

export default function MerchantPage() {
    const router = useRouter();
    return (
        <>
            <Head />
            <Navbar />
            <Merchant />
            <Footer />
        </>
    )
}