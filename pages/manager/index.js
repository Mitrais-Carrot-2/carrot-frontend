import React, { useEffect } from 'react';
import Navbar from '@components/Navbar';
import Head from '@components/Head';
import Freezer from './freezer';
import Tabs from './tabs';
import axios from 'axios';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getFreezer, getFreezerHistory, getStaff } from 'redux/actions/managerAction';
import { bindActionCreators } from 'redux';
import jsCookie from 'js-cookie';
import Router from 'next/router';


const Index = ({ state }) => {
    // const Index = ({ getFreezer, freezer, getFreezerHistory, freezerHistory, getStaff, staff, auth, state }) => {
    const [freezerHistoryData, setFreezerHistoryData] = React.useState();
    const [groups, setGroups] = React.useState([]);

    const dispatch = useDispatch();
    const auth = useSelector((state) => (state.authentication ? state.authentication : {}));
    const manager = useSelector((state) => (state.manager ? state.manager : {}));
    const freezer = useSelector((state) => (state.manager.freezer ? state.manager.freezer : {}));
    const staff = useSelector((state) => (state.manager.staff ? state.manager.staff : {}));
    const freezerHistory = useSelector((state) => (state.manager.freezerHistory ? state.manager.freezerHistory : {}));
    const message = useSelector((state) => (state.manager.message ? state.manager.message : ""));

    // console.log("manager", manager);

    useEffect(() => {
        if (!jsCookie.get("roles").split(",").includes("ROLE_MANAGER")) {
            Router.push("/");
        } else {
            getGroup();
            dispatch(getStaff(auth.token));
            dispatch(getFreezer(auth.token));
            dispatch(getFreezerHistory(auth.token));
            dispatch({ type: "SHARE_TO_STAFF_SUCCESS", payload: null });
        }
    }, []);

    let getGroup = () => {
        axios.get(process.env.NEXT_PUBLIC_API_URL + 'manager/group', {
            headers: {
                Authorization: `Bearer ${auth.token}`,        
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            }
        })
        .then(res => {
            setGroups(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <body>
            <Head title="Manager" />
            <Navbar />
            <div className="container">
                {/* <div className="container w-5/6 mx-auto"> */}
                <div className="mx-auto font-medium">
                    {/* <a href='#' className="bg-[#ff5722] text-white px-4 py-2.5 rounded-md text-1xl hover:bg-orange-600 transition duration-300">Share Carrot</a>
                    <a href='#' className="text-grey capitalize px-4 py-2.5 rounded-md text-1xl">Bazaar</a> */}
                    <h1 id="freezer-title" className="pl-0 text-3xl text-grey ml-0 font-medium tracking-widest">MANAGER FREEZER</h1>
                </div>
                <div id="success-label" className="mx-auto bg-green-600 text-center text-white my-3 rounded animate-pulse">
                    {message}
                </div>
                <div className='container mx-auto px-4 py-2 mt-4 bg-white rounded-lg'>
                    <hr className="box-title-hr mt-4" />
                    <h3 className="pl-0 text-lg text-grey ml-0 font-bold tracking-widest">FREEZER DETAIL</h3>
                    <Freezer
                        key={freezer}
                        freezer={freezer}
                    />
                    <br />
                </div>
                <div className='container mx-auto px-4 py-2 mt-4 bg-white rounded-lg'>
                    <hr className="box-title-hr mt-4" />
                    <h3 className="pl-0 text-lg text-grey ml-0 font-bold tracking-widest">DISTRIBUTION DETAIL</h3>
                    <Tabs
                        key={freezerHistory}
                        staff={staff}
                        groups={groups}
                        freezerHistory={freezerHistory}
                    />
                </div>
            </div>
        </body>
    )
}

const mapStateToProps = (state) => ({
    freezer: state.manager.freezer,
    freezerHistory: state.manager.freezerHistory,
    staff: state.manager.staff,
    auth: state.authentication,
    state: state
})

const mapDispatchToProps = (dispatch) => {
    return {
        getFreezer: bindActionCreators(getFreezer, dispatch),
        getFreezerHistory: bindActionCreators(getFreezerHistory, dispatch),
        getStaff: bindActionCreators(getStaff, dispatch),
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Index);
export default Index;