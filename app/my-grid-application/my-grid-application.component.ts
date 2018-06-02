import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";
import {RedComponentComponent} from "../red-component/red-component.component";
import { NumericEditorComponent } from '../numeric-editor-component/numeric-editor-component.component';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    private gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",
                cellRendererFramework: RedComponentComponent,
                width: 100
            },
            {
                headerName: "Reserve",
                field: "reserve",
                //cellRendererFramework: NumericEditorComponent,
                width: 100,
                editable:true,
            },
            {
                headerName: "Available",
                field: "available",
                cellRendererFramework: RedComponentComponent,
                width: 100
            },

        ];
        this.gridOptions.rowData = [
            {id: 5, value: 10, reserve:0, available:1000},
            {id: 10, value: 15, reserve:0, available:1000},
            {id: 15, value: 20, reserve:0, available:1000}
        ]
    }
}