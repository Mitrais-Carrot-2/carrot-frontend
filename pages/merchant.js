import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Merchant from "@components/Merchant/Merchant";
// import Header from "@components/Header";
import Head from "@components/Head";
import { useRouter } from "next/router";

export default function MerchantPage() {
    const router = useRouter();
    return (
        <body>
            <style jsx>{`
                .btn {
                margin-left: 10px;
                margin-top: 10px;
                margin-bottom: 10px;
                }
            `}</style>
            <Head />
            <Navbar />
            <Merchant />
            <Footer />
        </body>
    )
}