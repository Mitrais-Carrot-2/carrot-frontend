import React, { useEffect } from 'react';
import Navbar from '@components/Navbar';
import Head from '@components/Head';
import Freezer from './freezer';
import Tabs from './tabs';

import StaffTable from './staffTable';
import StaffGroupTable from './staffGroupTable';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import FormShare from "./formShare";
import axios from 'axios';
import { getCookie } from 'redux/actions/authAction';
import { wrapper } from "../../redux";
import { connect } from 'react-redux';
import { getFreezer, getStaff } from 'redux/actions/managerAction';
import { bindActionCreators } from 'redux';

const Index = ({ getFreezer, getStaff, freezer, staff, auth }) => {
    const [freezerHistory, setFreezerHistory] = React.useState([]);

    useEffect(() => {
        if (auth.token) {
            getFreezer(auth.token);
            getStaff(auth.token, auth.id);

            axios.get('http://localhost:8181/api/manager/freezer/history', {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            })
                .then(res => {
                    console.log(res.data);
                    setFreezerHistory(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            window.location.href = '/sign-in';
        }
    }, []);

    return (
        <body>
            <Head />
            <Navbar />
            <div className="container">
                {/* <div className="container w-5/6 mx-auto"> */}
                <div className="mx-auto font-medium">
                    {/* <a href='#' className="bg-[#ff5722] text-white px-4 py-2.5 rounded-md text-1xl hover:bg-orange-600 transition duration-300">Share Carrot</a>
                    <a href='#' className="text-grey capitalize px-4 py-2.5 rounded-md text-1xl">Bazaar</a> */}
                    <h1 className="pl-0 text-3xl text-grey ml-0 font-medium tracking-widest">MANAGER FREEZER</h1>
                </div>
                <div className='container mx-auto px-4 py-2 mt-4 bg-white rounded-lg'>
                    <hr className="box-title-hr mt-4" />
                    <h3 className="pl-0 text-lg text-grey ml-0 font-bold tracking-widest">FREEZER DETAIL</h3>
                    <Freezer freezer={freezer} />
                    <br />
                </div>
                <div className='container mx-auto px-4 py-2 mt-4 bg-white rounded-lg'>
                    <hr className="box-title-hr mt-4" />
                    <h3 className="pl-0 text-lg text-grey ml-0 font-bold tracking-widest">DISTRIBUTION DETAIL</h3>
                    <Tabs staff={staff} freezerHistory={freezerHistory} />
                </div>
            </div>
        </body>
    )
}

const mapStateToProps = (state) => ({
    freezer: state.manager.freezer,
    staff: state.manager.staff,
    auth: state.authentication,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getFreezer: bindActionCreators(getFreezer, dispatch),
        getStaff: bindActionCreators(getStaff, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);