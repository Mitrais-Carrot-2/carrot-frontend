import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import FormShare from "./formShare";
import StaffTable from "./staffTable";

export default function ActionButton({ id }) {
    const [modalStaffOpen, setModalStaffOpen] = React.useState(false);
    const [modalShareOpen, setModalShareOpen] = React.useState(false);
    const [groupName, setGroupName] = React.useState("");

    const [columnsStaff, setColumnsStaff] = React.useState([]);
    const [staff, setStaff] = React.useState([]);

    const modalListStaff = (id) => {
        const columns = [
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

        const staff = [
            {
                id: 1,
                name: 'Leanne Graham',
                jf: 'SQ',
                grade: 'TS',
                office: 'Ohio'
            },
            {
                id: 2,
                name: 'Ervin Howell',
                jf: 'SQ',
                grade: 'TS',
                office: 'California'
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                jf: 'SE',
                grade: 'TS',
                office: 'Dallas'
            },
        ];

        setColumnsStaff(columns);
        setStaff(staff);

        setGroupName(id);
        setModalStaffOpen(!modalStaffOpen);
    }
    
    function shareToGroup(id) {
        // console.log('share ' + id);
        setGroupName(id);
        setModalShareOpen(!modalShareOpen);
    }

    return (
        <>
            <Modal
                size="lg"
                style={{ maxWidth: '800px', width: '100%' }}
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
                    <FormShare action='google.com' receiver='group' groupName={groupName} />
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

            <button type="button" className="btn border-blue-600 mr-2" onClick={() => {
                modalListStaff(id)
            }}><i className="fa fa-users text-blue-600 fa-x px-1"></i></button>
            <button type="button" className="btn border-green-600 mr-3" onClick={() => {
                shareToGroup(id)
            }}><i className="fa fa-send text-green-600 fa-x px-1"></i></button>
        </>
    );
}

// function ModalStaff(modalOpen) {
//     return (
//         <>

//         </>
//     );
// }