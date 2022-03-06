import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import StockistRewardModal from "@components/StockistRewardModal";
import ManagerRewardModal from "@components/ManagerRewardModal";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Admin() {
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
        <h2 className="mt-4 pl-0 text-grey ml-0">
        ADMINISTRATOR DASHBOARD
       </h2>
    </main>
    <section className="admin-tabs py-3">
        <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap ">
                <div className="md:w-full pr-4 pl-4 md:px-0">
                    <ul className="flex flex-wrap list-none pl-0 mb-0  mb-3" id="myTab" role="tablist">
                        <li className="">
                            <a className="inline-block py-2 px-4 no-underline active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Sharing Level</a>
                        </li>
                        <li className="">
                            <a className="inline-block py-2 px-4 no-underline" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Manager Rewards</a>
                        </li>
                        <li className="">
                            <a className="inline-block py-2 px-4 no-underline" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Mitrais Awards</a>
                        </li>
                    </ul>
                    <div className="tab-content search-box" id="myTabContent">
                        <div className="tab-pane opacity-100 block active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="flex flex-wrap ">
                                <div className="md:w-full pr-4 pl-4">
                                    <hr className="box-title-hr"/>
                                    <h4 className="my-2 box-title">SHARING LEVEL LIST</h4>
                                </div>
                                <div className="md:w-full pr-4 pl-4">
                                    <table className="w-full max-w-full mb-4 bg-transparent table-hover mt-3">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Grade</th>
                                                <th scope="col">Sharing Level</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Default</td>
                                                <td>1</td>
                                                <td><a href="#">Delete</a> | <a href="#"> Edit</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>MG1</td>
                                                <td>2</td>
                                                <td><a href="#">Delete</a> | <a href="#"> Edit</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>MG2</td>
                                                <td>3</td>
                                                <td><a href="#">Delete</a> | <a href="#"> Edit</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>MG3</td>
                                                <td>4</td>
                                                <td><a href="#">Delete</a> | <a href="#"> Edit</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="text-center mb-3">
                                        <button type="button" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-teal-500 text-white hover:bg-teal-600" data-toggle="modal" data-target="#sharingLevel">
                                            <i className="fa fa-plus-circle"></i> ADD NEW SHARING LEVEL
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane opacity-100" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="flex flex-wrap ">
                                <div className="md:w-full pr-4 pl-4">
                                    <hr className="box-title-hr" />
                                    <h4 className="my-2 box-title">MANAGER REWARD LIST</h4>
                                </div>
                                <div className="md:w-full pr-4 pl-4">
                                    <table className="w-full max-w-full mb-4 bg-transparent table-hover mt-3">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Type Name</th>
                                                <th scope="col">Carrot</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Well Documented Code</td>
                                                <td>10</td>
                                                <td><a href="#">Delete</a> | <a href="#"> Edit</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Task Completion</td>
                                                <td>5</td>
                                                <td><a href="#">Delete</a> | <a href="#"> Edit</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="text-center mb-3">
                                        <button type="button" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-teal-500 text-white hover:bg-teal-600" data-toggle="modal" data-target="#sharingLevel">
                                            <i className="fa fa-plus-circle"></i> ADD MANAGER REWARD
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane opacity-100" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="flex flex-wrap ">
                                <div className="md:w-full pr-4 pl-4">
                                    <hr className="box-title-hr"/>
                                    <h4 className="my-2 box-title">SHARING LEVEL LIST</h4>
                                </div>
                                <div className="md:w-full pr-4 pl-4">
                                    <table className="w-full max-w-full mb-4 bg-transparent table-hover mt-3">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Type Name</th>
                                                <th scope="col">Carrot</th>
                                                <th scope="col">Type</th>
                                                <th scope="col"></th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>End Year Reward</td>
                                                <td>10</td>
                                                <td>End Year</td>
                                                <td></td>
                                                <td>Active</td>
                                                <td><a href="#"> Deactivate</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Birthday Reward</td>
                                                <td>5</td>
                                                <td>Column Year</td>
                                                <td>DateOfBirth</td>
                                                <td>Active</td>
                                                <td><a href="#"> Deactivate</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Q2 - 2018 Bonus</td>
                                                <td>20</td>
                                                <td>Date</td>
                                                <td>4/04/2018</td>
                                                <td>Inactive</td>
                                                <td><a href="#"> Activate</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Join Reward</td>
                                                <td>15</td>
                                                <td>Column</td>
                                                <td>StartJoiningDate</td>
                                                <td>Inactive</td>
                                                <td><a href="#"> Activate</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="text-center mb-3">
                                        <button type="button" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-teal-500 text-white hover:bg-teal-600" data-toggle="modal" data-target="#stockistReward">
                                            <i className="fa fa-plus-circle"></i> ADD STOCKIST REWARD
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <ManagerRewardModal />
      <StockistRewardModal />
      <Footer />
    </div>
  );
}
