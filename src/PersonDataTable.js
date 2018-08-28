
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";

import React, { Component } from 'react';
import { classNames } from 'classnames';

class PersonDataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selected: null,
            columns: [
                {
                    Header: "Email",
                    id: "email",
                    accessor: d => d.email
                },
                {
                    Header: "First Name",
                    id: "firstName",
                    accessor: d => d.firstName
                },
                {
                    Header: "Last Name",
                    id: "lastName",
                    accessor: d => d.lastName
                },
                {
                    Header: "Age",
                    id: "age",
                    accessor: d => d.age
                },
                {
                    Header: "Address",
                    id: "address",
                    accessor: d => d.address
                }
            ]
        };
    }

    render() {
        const entries = this.props.entries;
        const { columns } = this.state;
        return (
            <div>
                <ReactTable
                    data={entries}
                    columns={columns}
                    classNames="-striped -highlight"
                />
            </div>
        );
    }
}

export default PersonDataTable;