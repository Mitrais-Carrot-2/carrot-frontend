import { useRouter } from "next/router";

export default function AdminLayout() {
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
      <div className="container">
        <section className="features py-3">
          <div className="container mx-auto sm: px-4 search-box py-3">
            <div className="flex flex-wrap">
              <div className="text-center md:w-full px-4">
                <button
                  onClick={() => router.push("/admin/new-user")}
                  className="btn btn-carrot radius-5"
                >
                  {" "}
                  Create New Staff
                </button>

                <button
                  onClick={() => router.push("/admin/edit-user")}
                  className="btn btn-carrot radius-5"
                >
                  {" "}
                  Edit Current Staff
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}
