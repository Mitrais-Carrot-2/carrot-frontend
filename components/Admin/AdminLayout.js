import { useState } from "react";
import EditUser from "./EditUser";
import CreateUser from "./CreateUser";

export default function AdminLayout() {
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showUpdateUser, setShowUpdateUser] = useState(false);

  return (
    <body className="pb-4">
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
                  onClick={() => {
                    setShowCreateUser(true), setShowUpdateUser(false);
                  }}
                  className="btn btn-carrot radius-5"
                >
                  {" "}
                  Create New User
                </button>

                <button
                  onClick={() => {
                    setShowCreateUser(false), setShowUpdateUser(true);
                  }}
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
      <div className="container">
        {showCreateUser && <CreateUser />}
        {showUpdateUser && <EditUser />}
      </div>
    </body>
  );
}
