// import React from "react";
// import StaffTable from "./staffTable";

// // reactstrap components
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

// function ModalStaff() {
//   const [modalOpen, setModalOpen] = React.useState(false);

//   const columns = [
//     {
//       name: '#',
//       selector: row => row.numrow,
//       maxWidth: '10px',
//       sortable: true,
//     },
//     {
//       name: 'Rewarded To',
//       selector: row => row.name,
//       minWidth: '200px',
//       sortable: true
//     },
//     {
//       name: 'JF',
//       selector: row => row.jf,
//       sortable: true
//     },
//     {
//       name: 'Grade',
//       selector: row => row.grade,
//       sortable: true
//     },
//     {
//       name: 'Carrot',
//       selector: row => row.carrot,
//       sortable: true
//     },
//     {
//       name: 'Note',
//       selector: row => row.note,
//       sortable: true
//     },
//     {
//       name: 'Date',
//       selector: row => row.date,
//       sortable: true
//     },
//   ];

//   const staff = [
//     {
//       id: 1,
//       name: 'Leanne Graham',
//       jf: 'SQ',
//       grade: 'TS',
//       carrot: 100,
//       note: 'B',
//       date: '2020-01-01',
//     },
//     {
//       id: 2,
//       name: 'Ervin Howell',
//       jf: 'SE',
//       grade: 'TS',
//       carrot: 100,
//       note: 'C',
//       date: '2020-01-03',
//     },
//     {
//       id: 3,
//       name: 'Clementine Bauch',
//       jf: 'SQ',
//       grade: 'TS',
//       carrot: 100,
//       note: 'A',
//       date: '2020-01-02',
//     }
//   ];

//   return (
//     <>
//       <Modal
//         size="lg"
//         style={{ maxWidth: '800px', width: '100%' }}
//         toggle={() => setModalOpen(!modalOpen)}
//         isOpen={modalOpen}
//       >
//         <div className="modal-header">
//           <h5 className="text-sm modal-title" id="exampleModalLabel">
//             Modal title
//           </h5>
//           <button
//             aria-label="Close"
//             className=" close"
//             type="button"
//             onClick={() => setModalOpen(!modalOpen)}
//           >
//             <span aria-hidden={true}>×</span>
//           </button>
//         </div>
//         <ModalBody>
//           <StaffTable columns={columns} data={staff} />
//         </ModalBody>
//         <ModalFooter>
//           <Button
//             className="text-red-600 border-none hover:bg-red-600"
//             type="button"
//             onClick={() => setModalOpen(!modalOpen)}
//           >
//             Close
//           </Button>
//           <Button
//             className="bg-green-600 border-none hover:bg-green-700"
//             type="button">
//             Save changes
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </>
//   );
// }

// export default ModalStaff;