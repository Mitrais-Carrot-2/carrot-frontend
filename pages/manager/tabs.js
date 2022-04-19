import React, { useEffect, useState } from 'react';
import { shareToStaff, getFreezerHistory, getFreezer } from 'redux/actions/managerAction';
import { bindActionCreators } from 'redux';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import FormShare from "./formShare";
import StaffTable from './staffTable';
import StaffGroupTable from './staffGroupTable';
import Router from 'next/router';

import { connect, useDispatch, useSelector } from 'react-redux';

const Tabs = (props) => {
// const Tabs = ({ staff, getFreezer, freezer, getFreezerHistory, freezerHistory, auth, targetStaff, shareToStaff, groups }) => {
    const {groups, staff ,freezerHistory} = props;
    const [openTab, setOpenTab] = React.useState(1);
    const [modalShareOpen, setModalShareOpen] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    
    const dispatch = useDispatch();
    const auth = useSelector((state) => (state.authentication ? state.authentication : {}));
    const targetStaff = useSelector((state) => (state.manager.shareToStaff ? state.manager.shareToStaff : []));
    const freezer = useSelector((state) => (state.manager.freezer ? state.manager.freezer : {}));

    const columnsIndex = [
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
			maxWidth: '10px',
            sortable: true
        },
        {
            name: 'Grade',
            selector: row => row.grade,
			maxWidth: '10px',
            sortable: true
        },
        {
            name: 'Carrot',
            selector: row => row.carrot,
			maxWidth: '10px',
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
			minWidth: '200px',
            sortable: true
        },
    ];
    
    let closeModal = () => {
        setModalShareOpen(false);
        setErrorMessage('');
    };

    let sendStaff = () => {
        if (targetStaff.staffId != 0 && targetStaff.carrotAmount > 0) {
            if(freezer.carrot_amount >= targetStaff.carrotAmount){
                dispatch(shareToStaff(auth.token, targetStaff));
                setModalShareOpen(false);
                Router.push('/manager');
            } else {
                setErrorMessage('Not enough Carrot Left!');
            }
        } else {
            setErrorMessage('Please fill in a valid data!');
        }
    }

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
                                id="tab_staff"
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
                                id="tab_group"
                            >
                                Staff Group
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                        <div className="pb-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="grid place-content-center pt-4">
                                        <button onClick={() =>
                                            // openModalShare()
                                            setModalShareOpen(!modalShareOpen)
                                        }
                                        id="btn_share_to_staff"
                                        className='btn bg-[#17a2b8] text-white'>
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
                                                <div id="error-label" className="w-[94%] mx-auto bg-red-600 text-center text-white my-3 rounded animate-pulse">
                                                    {errorMessage}
                                                </div>
                                                <FormShare staff={staff} receiver='staff' />
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button
                                                    className="text-red-600 border-transparent hover:border-red-600 hover:bg-transparent hover:text-red-600"
                                                    type="button"
                                                    onClick={() => closeModal()}
                                                >
                                                    Close
                                                </Button>
                                                <Button
                                                    id="btn_send_reward"
                                                    onClick={() => sendStaff()}
                                                    className="px-4 bg-[#ff5722] border-none hover:bg-[#f2734b]"
                                                    type="button">
                                                    Reward Now
                                                </Button>
                                            </ModalFooter>
                                        </Modal>
                                    </div>
                                    <div className="mx-auto">
                                        <StaffTable type="freezerHistory" columns={columnsIndex} data={freezerHistory} />
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="mx-auto">
                                        <StaffGroupTable groups={groups} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


const mapStateToProps = (state) => ({
    auth: state.authentication,
    targetStaff: state.manager.shareToStaff,
    targetGroup: state.manager.shareToGroup,
    freezerHistory: state.manager.freezerHistory,
    freezer: state.manager.freezer,
})

const mapDispatchToProps = (dispatch) => {
    return {
        shareToStaff: bindActionCreators(shareToStaff, dispatch),
        getFreezerHistory: bindActionCreators(getFreezerHistory, dispatch),
        getFreezer: bindActionCreators(getFreezer, dispatch),
    }
}
// export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
export default Tabs;