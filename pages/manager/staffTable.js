import React from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import moment from 'moment';
import { connect } from 'react-redux';
import { getStaff } from 'redux/actions/managerAction';
import { bindActionCreators } from 'redux';
function StaffTable({columns, data, type}) {
    // console.log("data",props.data);
	
	// const columns = props.columns;
	// console.log(props.data);
    let staff = data.length>0 ? data : [];
    // let staff = [];
    const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

	// // sort staff by name ascending
	// staff.sort((a, b) => {
	// 	if (a.name < b.name) {
	// 		return -1;
	// 	}	
	let sortedStaffs = staff;
	if (type === 'freezerHistory') {
		sortedStaffs = staff.sort((a, b) => {
			if (a.date > b.date) {
				return -1;
			}
		});
	} else {
		sortedStaffs = staff.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
		});
	}

    const numberedStaffs = sortedStaffs.map((staff, index) => ({
        ...staff,
        numrow: index + 1,
		date: moment(staff.date).format('MMMM Do YYYY, h:mm:ss a')
    }));

	const filteredItems = numberedStaffs.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()) 
            || item.note && item.note.toLowerCase().includes(filterText.toLowerCase()),
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


const mapStateToProps = (state) => ({
    freezer: state.manager.staff,
    auth: state.authentication,
    state: state
})

const mapDispatchToProps = (dispatch) => {
    return {
        getStaff: bindActionCreators(getStaff, dispatch),
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(StaffTable);
export default StaffTable;
