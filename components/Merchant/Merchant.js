import { useRouter } from "next/router";

export default function Merchant() {
    const router = useRouter();
    return (
        <div className="container">
            <style jsx>{`
                .btn {
                margin-left: 10px;
                margin-top: 10px;
                margin-bottom: 10px;
                }
            `}</style>
            <section className="features py-3">
                <div className="container mx-auto sm: px-4 search-box py-3">
                    <div className="flex flex-wrap">
                        <div className="text-center md:w-full px-4">
                            <button
                                onClick={() => router.push("/merchant/bazaar")}
                                className="btn btn-carrot radius-5"
                            >
                                {" "}
                                Bazaar
                            </button>
                            <button
                                onClick={() => router.push("/merchant/staffgroup")}
                                className="btn btn-carrot radius-5"
                            >
                                {" "}
                                Staff Group
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}