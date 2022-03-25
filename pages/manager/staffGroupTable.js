import React from 'react';
import DataTable from 'react-data-table-component';
import { Fragment } from 'react/cjs/react.production.min';
import styled from 'styled-components';
import ActionButton from './actionButton';

export default function StaffGroupTable() {
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

    const columns = [
        {
            name: '#',
            selector: row => row.numrow,
            sortable: true,
        },
        {
            name: 'id',
            selector: row => row.id,
            omit: true,
        },
        {
            name: 'Group Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Allocation',
            selector: row => row.allocation,
            sortable: true
        },
        {
            name: 'Member',
            selector: row => row.member,
            sortable: true
        },
        {
            name: 'Total',
            selector: row => row.total,
            sortable: true
        },
        {
            name: 'Note',
            selector: row => row.note,
            sortable: true
        },
        {
            name: 'Action',
            cell: (row) => {
                return (
                    <Fragment>
                        {/* <button onClick={() => {
                            console.log('wuhuu');
                        }}>List</button> */}
                        <ActionButton id={row.id} />
                    </Fragment>
                );
            },
            button: true,
        },
    ];

    const staffs = [
        {
            id: 1,
            name: 'Leanne Graham',
            allocation: 100,
            member: 3,
            total: 300,
            note: 'B',
            action: [],
        },
    ];

    const sortedStaffs = staffs.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
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

