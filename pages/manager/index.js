import React from 'react';
import Navbar from '@components/Navbar';
import Head from '@components/Head';
import Freezer from './freezer';
import StaffTable from './staffTable';
import StaffGroupTable from './staffGroupTable';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import FormShare from "./formShare";

export default function Index() {

    return (
        <body>
            <Head />
            <Navbar />
            <div className="container w-5/6 mx-auto">
                <div className="mx-auto font-medium">
                    {/* <a href='#' className="bg-[#ff5722] text-white px-4 py-2.5 rounded-md text-1xl hover:bg-orange-600 transition duration-300">Share Carrot</a>
                    <a href='#' className="text-grey capitalize px-4 py-2.5 rounded-md text-1xl">Bazaar</a> */}
                    <h1 className="pl-0 text-3xl text-grey ml-0 font-medium tracking-widest">MANAGER FREEZER</h1>
                </div>
                <div className='container mx-auto px-4 py-2 mt-4 bg-white rounded-lg'>
                    <hr className="box-title-hr mt-4" />
                    <h3 className="pl-0 text-lg text-grey ml-0 font-bold tracking-widest">FREEZER DETAIL</h3>
                    <Freezer />
                    <br />
                </div>
                <div className='container mx-auto px-4 py-2 mt-4 bg-white rounded-lg'>
                    <hr className="box-title-hr mt-4" />
                    <h3 className="pl-0 text-lg text-grey ml-0 font-bold tracking-widest">DISTRIBUTION DETAIL</h3>
                    <Tabs color="orange" />
                </div>
            </div>
        </body>
    )
}

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    const [modalShareOpen, setModalShareOpen] = React.useState(false);

    const columns = [
        {
            name: '#',
            selector: row => row.numrow,
            maxWidth: '10px',
            sortable: true,
        },
        {
            name: 'Rewarded To',
            selector: row => row.name,
            minWidth: '200px',
            sortable: true
        },
        {
            name: 'JF',
            selector: row => row.jf,
            sortable: true
        },
        {
            name: 'Grade',
            selector: row => row.grade,
            sortable: true
        },
        {
            name: 'Carrot',
            selector: row => row.carrot,
            sortable: true
        },
        {
            name: 'Note',
            selector: row => row.note,
            sortable: true
        },
        {
            name: 'Date',
            selector: row => row.date,
            sortable: true
        },
    ];

    const staff = [
        {
            id: 1,
            name: 'Leanne Graham',
            jf: 'SQ',
            grade: 'TS',
            carrot: 100,
            note: 'B',
            date: '2020-01-01',
        },
        {
            id: 2,
            name: 'Ervin Howell',
            jf: 'SE',
            grade: 'TS',
            carrot: 100,
            note: 'C',
            date: '2020-01-03',
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            jf: 'SQ',
            grade: 'TS',
            carrot: 100,
            note: 'A',
            date: '2020-01-02',
        }
    ];

    return (
        <>
            <div className="flex flex-wrap mt-3">
                <div className="w-full">
                    <ul
                        className="flex list-none flex-wrap flex-row border-b border-grey-light"
                        role="tablist"
                    >
                        <li className="-mb-px last:mr-0 w-20 text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase py-3 rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-black border-2 border-b-white"
                                        : "text-grey")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Staff
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 w-36 text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase py-3 rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-black border-2 border-b-white"
                                        : "text-grey")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Staff Group
                            </a>
                        </li>
                        {/* <li className="-mb-px mr-2 last:mr-0 w-40 text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase py-3 rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-black border-2 border-b-white"
                                        : "text-grey")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Freezer History
                            </a>
                        </li> */}
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                        <div className="pb-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="grid place-content-center pt-4">
                                        <button onClick={() => setModalShareOpen(!modalShareOpen)} className='btn bg-[#17a2b8] text-white'>
                                            <i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;
                                            Reward Carrot
                                        </button>
                                        <Modal
                                            size="lg"
                                            style={{ maxWidth: '500px', width: '100%' }}
                                            toggle={() => setModalShareOpen(!modalShareOpen)}
                                            isOpen={modalShareOpen}
                                        >
                                            <div className="modal-header">
                                                <h5 className="text-sm modal-title" id="exampleModalLabel">
                                                    Reward Carrot
                                                </h5>
                                                <button
                                                    aria-label="Close"
                                                    className=" close"
                                                    type="button"
                                                    onClick={() => setModalShareOpen(!modalShareOpen)}
                                                >
                                                    <span aria-hidden={true}>×</span>
                                                </button>
                                            </div>
                                            <ModalBody>
                                                <FormShare receiver='staff' />
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button
                                                    className="text-red-600 border-transparent hover:border-red-600 hover:bg-transparent hover:text-red-600"
                                                    type="button"
                                                    onClick={() => setModalShareOpen(!modalShareOpen)}
                                                >
                                                    Close
                                                </Button>
                                                <Button
                                                    className="px-4 bg-[#ff5722] border-none hover:bg-[#f2734b]"
                                                    type="button">
                                                    Reward Now 
                                                </Button>
                                            </ModalFooter>
                                        </Modal>
                                    </div>
                                    <div className="mx-auto">
                                        <StaffTable columns={columns} data={staff} />
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="mx-auto">
                                        <StaffGroupTable />
                                    </div>
                                </div>
                                {/* <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <div className="mx-auto">
                                        <StaffGroupTable />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};