import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import Head from "@components/Head";
import Merchant from "@components/Merchant/Merchant";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import CreateBazaar from "./features/createBazaar";
import UpdateBazaar from "./features/updateBazaar";

export default function Bazaar() {
  const router = useRouter();

  const url = process.env.NEXT_PUBLIC_API_URL + "bazaar";
  const [bazaars, setBazaar] = useState([]);
  const [showCreateBazaar, setShowCreateBazaar] = useState(false);
  const [showUpdateBazaar, setShowUpdateBazaar] = useState(false);
  const [selectedBazaar, setSelectedBazaar] = useState({});

  useEffect(() => {
    axios.get(url).then((response) => setBazaar(response.data));
    //eslint-disable-next-line
  }, []);
  // console.log(bazaar)

  function reloadPage() {
    axios.get(url).then((response) => setBazaar(response.data));
  }

  return (
    <body>
      <Head />
      <Navbar />
      <Merchant />
      <div className="container">
        <section className="bazaar-table">
          <div className="row d-flex px-10">
            <h2 className="col-md-6 pl-0 text-grey mb-3">
              Bazaar Dashboard
            </h2>
          </div>
          <div className="mx-auto sm: px-4 search-box py-3 overflow-x-auto">
            {/* <h2 className="col-md-6 mt-4 pl-0 text-grey ml-0">Bazaar List</h2> */}
            <div className="row d-flex px-4 items-center">
              <div className="col-md-6">
                <hr className="box-title-hr mt-3" />
                <h4 className="mt-1 mb-3 text-lg text-grey ml-0 font-bold tracking-widest">Bazaar List</h4>
              </div>
              <div className="col-md-6">
                <button
                  className="col-sm-6 btn bg-[#17a2b8] text-white mt-0 pull-right radius-5"
                  onClick={() => {
                    setShowCreateBazaar(true);
                  }}
                >
                  {" "}
                  Create New Bazaar
                </button>
                {showCreateBazaar && (
                  <CreateBazaar
                    closeClick={setShowCreateBazaar}
                    refreshPage={reloadPage}
                  />
                )}
              </div>
            </div>
            <table className="table table-hover mt-3">
              <thead>
                <tr>
                  <th itemScope="col" aria-rowspan={2}>
                    #
                  </th>
                  <th
                    itemScope="col"
                    aria-rowspan={2}
                    style={{ display: "none" }}
                  >
                    id
                  </th>
                  <th itemScope="col" aria-rowspan={2}>
                    Bazaar Name
                  </th>
                  <th itemScope="col" aria-rowspan={2}>
                    Start Date
                  </th>
                  <th itemScope="col" aria-rowspan={2}>
                    End Date
                  </th>
                  <th itemScope="col" aria-rowspan={2}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {bazaars.map((data, index) => (
                  <tr key={index + 1} className="odd:bg-white even:bg-slate-100">
                    <td>{index + 1}</td>
                    <td style={{ display: "none" }}>{data.id}</td>
                    <td>{data.bazaarName}</td>
                    <td>{data.startDate}</td>
                    <td>{data.endDate}</td>
                    <td>
                      <button
                        type="button"
                        className="btn border-blue-600 mr-2"
                        onClick={() => {
                          setShowUpdateBazaar(true);
                          setSelectedBazaar(data);
                          console.log(selectedBazaar);
                        }}
                      >
                        <i className="fa fa-edit text-blue-600 fa-x px-1"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {showUpdateBazaar && (
              <UpdateBazaar
                closeClick={setShowUpdateBazaar}
                updateData={selectedBazaar}
                refreshPage={reloadPage}
              />
            )}
          </div>
        </section>
      </div>
      <Footer />
    </body>
  );
}
