import React from 'react';
import { connect } from 'react-redux';
import { shareToStaff } from 'redux/actions/managerAction';
import { bindActionCreators } from 'redux';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import FormShare from "./formShare";
import StaffTable from './staffTable';
import StaffGroupTable from './staffGroupTable';
import Router from 'next/router';

const Tabs = ({ staff, freezerHistory, auth, targetStaff, shareToStaff }) => {
    const [openTab, setOpenTab] = React.useState(1);
    const [modalShareOpen, setModalShareOpen] = React.useState(false);

    let sendStaff = () => {
        // console.log(targetStaff);
        shareToStaff(auth.token, targetStaff);
        setModalShareOpen(false);
        window.location.href = "/manager";
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
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                        <div className="pb-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="grid place-content-center pt-4">
                                        <button onClick={() =>
                                            // openModalShare()
                                            setModalShareOpen(!modalShareOpen)
                                        } className='btn bg-[#17a2b8] text-white'>
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
                                                <FormShare staff={staff} receiver='staff' />
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
                                                    onClick={() => sendStaff()}
                                                    className="px-4 bg-[#ff5722] border-none hover:bg-[#f2734b]"
                                                    type="button">
                                                    Reward Now
                                                </Button>
                                            </ModalFooter>
                                        </Modal>
                                    </div>
                                    <div className="mx-auto">
                                        <StaffTable data={freezerHistory} />
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
}


const mapStateToProps = (state) => ({
    auth: state.authentication,
    targetStaff: state.manager.shareToStaff,
})

const mapDispatchToProps = (dispatch) => {
    return {
        shareToStaff: bindActionCreators(shareToStaff, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);