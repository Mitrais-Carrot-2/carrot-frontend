import React from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

export default function Table(columns, filter) {
    const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

    // contoh isi props filter seperti di bawah ini, okeeeeeee
     
	// const filteredItems = data.filter(
	// 	item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	// );

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
			data={filter}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			persistTableHead
            // defaultSortFieldId={7}
            // sortIcon={<SortIcon />}
		/>
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