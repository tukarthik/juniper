import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AgGridModule} from "ag-grid-angular/main";
import {AppComponent} from "./app.component";
import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";
import {RedComponentComponent} from "./red-component/red-component.component";
import { NumericEditorComponent } from './numeric-editor-component/numeric-editor-component.component';

@NgModule({
    declarations: [
        AppComponent,
        MyGridApplicationComponent,
        RedComponentComponent,
        NumericEditorComponent
    ],
    imports: [
        BrowserModule,
        AgGridModule.withComponents(
            [RedComponentComponent,NumericEditorComponent]
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}