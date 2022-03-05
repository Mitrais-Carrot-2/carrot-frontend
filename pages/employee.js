import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import StockistModal from "@components/stockistModal";
import ManagerModal from "@components/ManagerModal";
import { useRouter } from "next/router";

export default function Employee() {
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
      <main role="main" className="container mx-auto sm:px-4">
       <h2 className="mt-4 pl-0 text-grey ml-0">DASHBOARD</h2>
   </main>

    <section className="mini-dashboard my-4">
      <div className="container mx-auto sm:px-4">
        
        <div className="flex flex-wrap ">
          <div className="md:w-1/3 pr-4 pl-4">
            <div className="flex flex-wrap  box-profile soft-shadow px-0 mr-0">
              <div className="md:w-1/3 pr-4 pl-4 my-auto">
                <img src="img/user.jpg" alt="" className="max-w-full h-auto rounded-full"/>
              </div>
              <div className="md:w-2/3 pr-4 pl-4 my-auto">
                <h4 className="mb-0 text-white">Henokh Santoso</h4>
                <p className="text-white">Mitrais Employee</p>
                {/* <!-- <a href="edit-profile.html" class="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded badge-white">Edit Profile</a> --> */}
              </div>
            </div>
          </div>
          <div className="md:w-1/3 pr-4 pl-4">
            <div className="flex flex-wrap  box-carrot px-0 mr-0">
              <div className="md:w-1/3 pr-4 pl-4 my-auto">
                <img src=" img/mc-icon-carrot.png" alt="" className="max-w-full h-auto rounded-full"/>
              </div>
              <div className="md:w-2/3 pr-4 pl-4 my-auto">
                <h4 className="text-white">You&apos;ve earned 560 carrots!</h4>
                <a className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded badge-white" data-toggle="modal" data-target="#exampleModal">
              Share carrot!
            </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 pr-4 pl-4">
            <div className="flex flex-wrap  box-additional px-0">
              <div className="md:w-1/3 pr-4 pl-4 my-auto">
                <img src=" img/mc-icon-transaction.png" alt="" className="max-w-full h-auto rounded-full"/>
              </div>
              <div className="md:w-2/3 pr-4 pl-4 my-auto">
                <h4 className="text-white">Carrots Transaction History</h4>
                <a href="transaction-history.html" className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded badge-white">View</a>
              </div>
            </div>
          </div>
        </div>

      </div> 
    </section>

    <section className="bazaar-1-item mb-4">
      <div className="container mx-auto sm:px-4 search-box pb-4">
        <div className="flex flex-wrap">
          <div className="md:w-full pr-4 pl-4">
            <hr className="box-title-hr"/>
            <h4 className="my-2 box-title">APRIL MOP BAZAAR</h4>
          </div>
          <div className="md:w-1/2 pr-4 pl-4 br-1">
            <img src="img/bazaar_vespa.jpg" className="max-w-full h-auto p-6" alt=""/>
          </div>
          <div className="md:w-1/2 pr-4 pl-4 self-center p-12">
            <h3>2018 Vespa 946 Limited Edition</h3>
            <h4><strong className="carrot-orange">350.000 Carrots</strong></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eius velit dolores exercitationem porro tempore, ipsa suscipit quia. Libero voluptate quibusdam neque numquam error quas ipsa hic voluptatem aliquam, necessitatibus.</p>
            <a href="item-details.html" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot radius-5">Buy</a>
          </div>
        </div>
      </div>
    </section>

    <section className="bazaar-2-items mb-4">
      <div className="container mx-auto sm:px-4 search-box pb-4">
        <div className="flex flex-wrap ">
          <div className="md:w-full pr-4 pl-4">
            <hr className="box-title-hr"/>
            <h4 className="my-2 box-title">Black Friday Bazaar</h4>
          </div>
          <div className="md:w-1/2 pr-4 pl-4 br-1">
            <div className="text-center">
              <img src="img/bazaar_macbook.jpg" className="max-w-full h-auto p-6 bazaar-item mb-3" alt=""/>
            </div>
            <div className="px-3">
              <h3>2017 15&quot; Macbook Pro with Touchbar</h3>
              <h4><strong className="carrot-orange">150.000 Carrots</strong></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eius velit dolores exercitationem porro tempore, ipsa suscipit quia. Libero voluptate quibusdam neque numquam error quas ipsa hic voluptatem aliquam, necessitatibus.</p>
              <a href="item-details.html" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot radius-5">Buy</a>
            </div>
          </div>
          <div className="md:w-1/2 pr-4 pl-4">
            <div className="text-center">
              <img src="img/bazaar_iphone.jpg" className="max-w-full h-auto p-6 bazaar-item mb-3" alt=""/>
            </div>
            <div className="px-3">
              <h3>iPhone X 64Gb</h3>
              <h4><strong className="carrot-orange">85.000 Carrots</strong></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eius velit dolores exercitationem porro tempore, ipsa suscipit quia. Libero voluptate quibusdam neque numquam error quas ipsa hic voluptatem aliquam, necessitatibus.</p>
              <a href="item-details.html" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot radius-5">Buy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="bazaar-3-items mb-4">
      <div className="container mx-auto sm:px-4 search-box pb-4">
        <div className="flex flex-wrap content-end">
          <div className="md:w-full pr-4 pl-4">
            <hr className="box-title-hr" />
            <h4 className="my-2 box-title">Easter Bazaar</h4>
          </div>
        </div>
        <div className="flex flex-wrap  mt-3">
          <div className="md:w-1/3 pr-4 pl-4">
            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
              <img className="w-full rounded rounded-t" src="img/bazaar_macbook.jpg" alt="Bazaar Item" />
              <div className="flex-auto p-6">
                <h5 className="mb-3">15&quot; MacBook Pro</h5>
                <p className="mb-0">150.000 Carrots</p>
              </div>
              <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot">BUY</a>
            </div>
          </div>
          <div className="md:w-1/3 pr-4 pl-4">
            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
              <img className="w-full rounded rounded-t" src="img/bazaar_iphone.jpg" alt="Bazaar Item" />
              <div className="flex-auto p-6">
                <h5 className="mb-3">iPhone X 64Gb</h5>
                <p className="mb-0">85.000 Carrots</p>
              </div>
              <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot">BUY</a>
            </div>
          </div>
          <div className="md:w-1/3 pr-4 pl-4">
            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
              <img className="w-full rounded rounded-t" src="img/bazaar_helmet.jpg" alt="Bazaar Item" />
              <div className="flex-auto p-6">
                <h5 className="mb-3">Fly Helmet</h5>
                <p className="mb-0">1.000 Carrots</p>
              </div>
              <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot">BUY</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bazaar mb-4 pb-5">
      <div className="container mx-auto sm:px-4 search-box pb-4">
        <div className="flex flex-wrap content-end">
          <div className="md:w-full pr-4 pl-4">
            <hr className="box-title-hr" />
            <h4 className="my-2 box-title">Mid-Year Bazaar</h4>
          </div>
        </div>
        <div className="flex flex-wrap  mt-3">
          <div className="md:w-1/4 pr-4 pl-4">
            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
              <img className="w-full rounded rounded-t" src="img/bazaar_macbook.jpg" alt="Bazaar Item" />
              <div className="flex-auto p-6">
                <h5 className="mb-3">15&quot; MacBook Pro</h5>
                <p className="mb-0">150.000 Carrots</p>
              </div>
              <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot">BUY</a>
            </div>
          </div>
          <div className="md:w-1/4 pr-4 pl-4">
            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
              <img className="w-full rounded rounded-t" src="img/bazaar_iphone.jpg" alt="Bazaar Item" />
              <div className="flex-auto p-6">
                <h5 className="mb-3">iPhone X 64Gb</h5>
                <p className="mb-0">85.000 Carrots</p>
              </div>
              <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot">BUY</a>
            </div>
          </div>
          <div className="md:w-1/4 pr-4 pl-4">
            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
              <img className="w-full rounded rounded-t" src="img/bazaar_helmet.jpg" alt="Bazaar Item" />
              <div className="flex-auto p-6">
                <h5 className="mb-3">Fly Helmet</h5>
                <p className="mb-0">1.000 Carrots</p>
              </div>
              <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot">BUY</a>
            </div>
          </div>
          <div className="md:w-1/4 pr-4 pl-4">
            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
              <img className="w-full rounded rounded-t" src="img/bazaar_burger.jpg" alt="Bazaar Item" />
              <div className="flex-auto p-6">
                <h5 className="mb-3">Burger King Voucher</h5>
                <p className="mb-0">500 Carrots</p>
              </div>
              <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-carrot">BUY</a>
            </div>
          </div>
        </div>
      </div>
    </section>
      <ManagerModal/>
      <StockistModal/>
      <Footer />
    </div>
  );
}
