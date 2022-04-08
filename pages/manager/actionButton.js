import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import FormShare from "./formShare";
import StaffTable from "./staffTable";
import { connect, useDispatch, useSelector } from 'react-redux';
import { shareToGroup, setShareToGroup, getFreezerHistory } from 'redux/actions/managerAction';
import { bindActionCreators } from 'redux';
import Router from 'next/router';

const ActionButton = (props) => {
    const { groupId, groupName, totalMember } = props;
    const [modalStaffOpen, setModalStaffOpen] = React.useState(false);
    const [modalShareOpen, setModalShareOpen] = React.useState(false);

    // const [staff, setStaff] = React.useState([]);
    // const [sendToGroup, setSendToGroup] = React.useState({
    //     groupId: 0,
    //     carrotAmount: 0,
    //     note: ""
    // });
    const [errorMessage, setErrorMessage] = React.useState('');
    const dispatch = useDispatch();
    
    const auth = useSelector((state) => (state.authentication ? state.authentication : {}));
    const staff = useSelector((state) => (state.manager.staff ? state.manager.staff : {}));
    const targetGroup = useSelector((state) => (state.manager.shareToGroup ? state.manager.shareToGroup : {}));

    const columnsStaff = [
        {
            name: '#',
            selector: row => row.numrow,
            maxWidth: '10px',
            sortable: true,
        },
        {
            name: 'Name',
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
            name: 'Office',
            selector: row => row.office,
            sortable: true
        }
    ];

    const modalListStaff = (id) => {
        axios.get(`http://localhost:8181/api/manager/group/${id}/staff/`, {
            headers: {
                Authorization: `Bearer ${auth.token}`,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
        })
        .then(res => {
            return res.data;
        }).then((staff) => {
            // console.log("group member", staff);
            setStaff(staff);
            setModalStaffOpen(!modalStaffOpen);
        });
    }

    function showModalGroup() {
        setModalShareOpen(!modalShareOpen);
    }

    let closeModal = () => {
        setModalShareOpen(false);
        setErrorMessage('');
    };

    let sendGroup = () => {
        // console.log(targetGroup);
        if (targetGroup.carrotAmount > 0) {
            dispatch(shareToGroup(auth.token, targetGroup));
            setModalShareOpen(false);
            Router.push('/manager');
        } else {
            setErrorMessage('Please fill in all the fields');
        }
    }

    return (
        <>
            <Modal
                size="lg"
                // style={{ maxWidth: '800px', width: '100%' }}
                toggle={() => setModalStaffOpen(!modalStaffOpen)}
                isOpen={modalStaffOpen}
            >
                <div className="modal-header">
                    <h5 className="text-sm modal-title" id="exampleModalLabel">
                        Group Member
                    </h5>
                    <button
                        aria-label="Close"
                        className=" close"
                        type="button"
                        onClick={() => setModalStaffOpen(!modalStaffOpen)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody>
                    <hr className="box-title-hr my-1" />
                    <h1><span className="font-bold">Group Name:</span> {groupName} </h1>
                    <StaffTable columns={columnsStaff} data={staff} />
                </ModalBody>
                <ModalFooter>
                    <Button
                        className="text-red-600 border-transparent hover:border-red-600 hover:bg-transparent hover:text-red-600"
                        type="button"
                        onClick={() => setModalStaffOpen(!modalStaffOpen)}
                    >
                        Close
                    </Button>

                    {/* <Button
                        className="bg-green-600 border-none hover:bg-green-700"
                        type="button">
                        Save
                    </Button> */}
                </ModalFooter>
            </Modal>

            <Modal
                size="lg"
                // className="sm:w-full md:w-full lg:w-1/3"
                style={{ maxWidth: '500px', width: '100%' }}
                toggle={() => setModalShareOpen(!modalShareOpen)}
                isOpen={modalShareOpen}
            >
                <div className="modal-header">
                    <h5 className="text-sm modal-title" id="exampleModalLabel">
                        Share Carrot
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
                    <div className="w-[94%] mx-auto bg-red-600 text-center text-white my-3 rounded animate-pulse">
                        {errorMessage}
                    </div>
                    <FormShare receiver='group' groupId={groupId} groupName={groupName} totalMember={totalMember} />
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
                        onClick={() => sendGroup()}
                        className="px-4 bg-[#ff5722] border-none hover:bg-[#f2734b]"
                        type="button">
                        Reward Now
                    </Button>
                </ModalFooter>
            </Modal>

            <button id="btn_detail_group" type="button" className="btn border-blue-600 mr-2" onClick={() => {
                modalListStaff(groupId)
            }}><i className="fa fa-users text-blue-600 fa-x px-1"></i></button>
            <button id="btn_share_to_group" type="button" className="btn border-green-600 mr-3" onClick={() => {
                showModalGroup(groupName)
            }}><i className="fa fa-send text-green-600 fa-x px-1"></i></button>
        </>
    );
}

const mapStateToProps = (state) => ({
    auth: state.authentication,
    targetGroup: state.manager.shareToGroup,
})

const mapDispatchToProps = (dispatch) => {
    return {
        shareToGroup: bindActionCreators(shareToGroup, dispatch),
        setShareToGroup: bindActionCreators(setShareToGroup, dispatch),
    }
}
// export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
export default ActionButton;