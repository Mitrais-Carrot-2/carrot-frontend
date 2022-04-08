import { useState } from "react";

export default function EditUser() {
  const [userFormData, setUserFormData] = useState({});
  return (
    <section>
      <div className="container mx-auto sm: px-4 search-box py-3 mb-4">
        <div className="row d-flex px-4">
          <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0">Edit User</h2>
          <div className="col-md-6"></div>
        </div>
      </div>
    </section>
  );
}
