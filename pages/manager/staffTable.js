import React from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
// import SortIcon from "@material-ui/icons/ArrowDownward";

export default function StaffTable() {
    const staffs = [
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

    const sortedStaffs = staffs.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });
    const numberedStaffs = sortedStaffs.map((staff, index) => ({
        ...staff,
        numrow: index + 1,
    }));

    const columns = [
        {
            name: '#',
            selector: row => row.numrow,
            sortable: true,
        },
        {
            name: 'Rewarded To',
            selector: row => row.name,
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

    const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const filteredItems = numberedStaffs.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

    return (
        <DataTable
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			persistTableHead
            // defaultSortFieldId={7}
            // sortIcon={<SortIcon />}
		/>
        
        // <table id="dataTable" className="table-responsive table-bordered">
        //     <thead className="bg-gray-50 text-center">
        //         <tr>
        //             <th className="">
        //                 #
        //             </th>
        //             <th className="w-50">
        //                 Rewarded To
        //             </th>
        //             <th className="px-4">
        //                 JF
        //             </th>
        //             <th className="px-4">
        //                 Grade
        //             </th>
        //             <th className="px-4">
        //                 Carrot
        //             </th>
        //             <th className="w-50">
        //                 Note
        //             </th>
        //             <th className="px-5">
        //                 Date
        //             </th>
        //         </tr>
        //     </thead>
        //     <tbody className="bg-white">
        //         <tr className="whitespace-nowrap">
        //             <td className="py-2 text-center">
        //                 1
        //             </td>
        //             <td className="py-2 text-center">
        //                 <div className="text-gray-900">
        //                     Cinthya Kusumadewi
        //                 </div>
        //             </td>
        //             <td className="py-2 text-center">
        //                 <div className="">SQ</div>
        //             </td>
        //             <td className="py-2 text-center">
        //                 <div className="">TS</div>
        //             </td>
        //             <td className="py-2 text-center">
        //                 <div className="">100</div>
        //             </td>
        //             <td className="py-2 text-center">
        //                 <div className="">This is note.</div>
        //             </td>
        //             <td className="py-2 text-center">
        //                 2021-1-12
        //             </td>
        //         </tr>
        //         <tr className="whitespace-nowrap">
        //             <td className="py-2 text-center">
        //                 2
        //             </td>
        //             <td className="py-2 text-center">
        //                 <div className="text-gray-900">
        //                     Cinthya Kusumadewi
        //                 </div>
        //             </td>
        //             <td className="py-2 text-center">
        //                 <div className="">SQ</div>
        //             </td>
        //             <td className="py-2 text-center">
        //                 <div className="">TS</div>
        //             </td>
        //             <td className="py-2 text-center">
        //                 <div className="">100</div>
        //             </td>
        //             <td className="py-2 text-center">
        //                 <div className="">This is note.</div>
        //             </td>
        //             <td className="py-2 text-center">
        //                 2021-1-12
        //             </td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}


const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
        Search:&nbsp;
		<TextField
			type="text"
			placeholder=""
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		{/* <ClearButton type="button" onClick={onClear}>
			Clear
		</ClearButton> */}
	</>
);

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;


// const ClearButton = styled(Button)`
// 	border-top-left-radius: 0;
// 	border-bottom-left-radius: 0;
// 	border-top-right-radius: 5px;
// 	border-bottom-right-radius: 5px;
// 	height: 34px;
// 	width: 32px;
// 	text-align: center;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// `;

