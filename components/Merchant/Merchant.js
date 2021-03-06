import { useRouter } from "next/router";

export default function Merchant() {
  const router = useRouter();
  return (
    <>
      <style jsx>{`
        .btn {
          margin-left: 10px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      `}</style>
      <div className="container" id="merchant-container">
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
                  onClick={() => router.push("/merchant/bazaaritem")}
                  className="btn btn-carrot radius-5"
                >
                  {" "}
                  Bazaar Item
                </button>

                <button
                  onClick={() => router.push("/merchant/exchange")}
                  className="btn btn-carrot radius-5"
                >
                  {" "}
                  Exchange
                </button>

                <button
                  id="staff-group-button"
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
    </>
  );
}
