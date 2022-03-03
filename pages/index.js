import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Mitrais Carrot</title>
        <meta
          name="description"
          content="Mitrais Carrot is a system used for administrative task of all company trainings."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main role="main" className="container">
        <h2 className="mt-4 pl-0 text-grey ml-0">MITRAIS CARROT PROTOTYPE</h2>
        <p className="text-info">
          This page is not a part of Mitrais Carrot Web App, I made it just to
          make it easier for you to switch between role. <br />
          This is a *pre-alpha*, expect plenty of bugs and missing features.
          Please report them if you found one :){" "}
        </p>
      </main>
      <section className="role py-3">
        <div className="container search-box py-3">
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-grey-dark">Choose your role:</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <button onClick={()=> router.push('/employee')} className="btn btn-carrot radius-5">
                {" "}
                Employee
              </button>
              <button onClick={()=> router.push('/manager')} className="btn btn-carrot radius-5">
                {" "}
                Manager
              </button>
              <button onClick={()=> router.push('/merchant')} className="btn btn-carrot radius-5">
                {" "}
                Merchant
              </button>
              <button onClick={()=> router.push('/farmer')} className="btn btn-carrot radius-5">
                {" "}
                Farmer / Stockist
              </button>
              <button
                onClick={() => router.push("/admin")}
                className="btn btn-carrot radius-5"
              >
                {" "}
                Administrator
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
