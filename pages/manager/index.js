import React from 'react';
import Navbar from '@components/Navbar';
import Head from '@components/Head';
import Freezer from './freezer';
import StaffTable from './staffTable';
import StaffGroupTable from './staffGroupTable';

export default function Index() {
    return (
        <body>
            <Head />
            <Navbar />
            <div className="container w-5/6 mx-auto">
                <div className="mx-auto font-medium">
                    <a href='#' className="bg-[#ff5722] text-white px-4 py-2.5 rounded-md text-1xl hover:bg-orange-600 transition duration-300">Share Carrot</a>
                    <a href='#' className="text-grey capitalize px-4 py-2.5 rounded-md text-1xl">Bazaar</a>
                </div>
                <div className='container mx-auto px-4 py-2 mt-4 bg-white rounded-lg'>
                    <hr className="box-title-hr mt-4" />
                    <h3 className="pl-0 text-lg text-grey ml-0 font-bold tracking-widest">DISTRIBUTION DETAIL</h3>
                    <Freezer />
                    <Tabs color="orange" />
                </div>
            </div>
        </body>
    )
}

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);

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
            jf: 'SQ',
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

    // const filteredItems = staff.filter(
    //     item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    // );

    // const sortedStaffs = staffs.sort((a, b) => {
    //     return new Date(a.date) - new Date(b.date);
    // });
    // const numberedStaffs = sortedStaffs.map((staff, index) => ({
    //     ...staff,
    //     numrow: index + 1,
    // }));

    return (
        <>
            <div className="flex flex-wrap mt-3">
                <div className="w-full">
                    <ul
                        className="flex list-none flex-wrap pt-3 flex-row border-b"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 w-40 text-center">
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
                        <li className="-mb-px mr-2 last:mr-0 w-40 text-center">
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
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                        <div className="pb-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="grid place-content-center py-4">
                                        <button className='btn bg-[#17a2b8] text-white'>
                                            <i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;
                                            Reward Carrot
                                        </button>
                                    </div>
                                    <div className="mx-auto">
                                        <StaffTable />
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="mx-auto">
                                        <StaffGroupTable />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};