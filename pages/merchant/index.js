import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

export default function Merchant() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Mitrais Carrot</title>
        <meta
          name="description"
          content="Mitrais Carrot is a system used for administrative task of all company trainings."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main role="main" className="container mt-3">
       <div className="row d-flex">
         <div className="col-md-6">
            <h2 className="mt-4 pl-0 text-grey ml-0">MERCHANT DASHBOARD</h2>
         </div>
         <div className="col-md-6">
            <div className="btn-group mt-4 pull-right " role="group" aria-label="Basic example">
                <a href="merchant-transaction.html" className="btn btn-outline-success">Transaction List</a>
                <a href="merchant-create-bazaar.html" className="btn btn-success">Create Bazaar</a>
            </div>
          </div>
       </div>
       
    </main>

    <section className="transaction-history my-4">
      <div className="container search-box">

        <div className="row">
          <div className="col-md-12">
            <hr className="box-title-hr"/>
            <h4 className="my-2 box-title">LIST OF Bazaars</h4>
          </div>
          <div className="col-md-12">
            <table className="table table-bordered mt-3">
              <tr>
                <th rowSpan="2">No</th>
                <th rowSpan="2">Bazaar Name</th>
                <th colSpan="2">Period</th>
                <th rowSpan="2">Status</th>
                <th rowSpan="2">Action</th>
              </tr>
              <tr>
                <td>Start</td>
                <td>End</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Barn 2016</td>
                <td>1/01/2016</td>
                <td>31/12/2016</td>
                <td>Active</td>
                <td><a href="merchant-manage-bazaar.html">Manage</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Barn 2017</td>
                <td>1/01/2017</td>
                <td>31/12/2017</td>
                <td>Active</td>
                <td><a href="merchant-manage-bazaar.html">Manage</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Barn 2018</td>
                <td>1/01/2018</td>
                <td>31/12/2018</td>
                <td>Active</td>
                <td><a href="merchant-manage-bazaar.html">Manage</a></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
}
