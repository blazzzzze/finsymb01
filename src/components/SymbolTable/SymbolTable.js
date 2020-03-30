import React from 'react';
import { DataTable } from "primereact/datatable";
import {Column} from "primereact/column";

export default function SymbolTable(props) {
    return (
        <div>
            <div>
                { <DataTable value={props.data} header={props.symbol} emptyMessage="There is no data to display">
                    <Column field="dateTime" header="Tick Time"/>
                    <Column field="value" header="Current"/>
                </DataTable> }
            </div>
        </div>
    )
}
