import React from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

export default function StaffTable(props) {
    // console.log(props.data);
    let staff = props.data || [];
    const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

	// // sort staff by name ascending
	// staff.sort((a, b) => {
	// 	if (a.name < b.name) {
	// 		return -1;
	// 	}	

    const sortedStaffs = staff.sort((a, b) => {
		if (a.name < b.name) {
			return -1;
		}
        // return new Date(b.date) - new Date(a.date);
    });

    const numberedStaffs = sortedStaffs.map((staff, index) => ({
        ...staff,
        numrow: index + 1,
    }));

	const filteredItems = numberedStaffs.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()) 
            // || item.jf && item.jf.toLowerCase().includes(filterText.toLowerCase()),
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
			columns={props.columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			persistTableHead
            // defaultSortFieldId={7}
		/>
    );
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
		<ClearButton type="button" onClick={onClear}>
			<i className='fa fa-remove text-red-500'></i>
		</ClearButton>
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

const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
    border: 1px solid #e5e5e5;
	height: 32px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

