import {NgModule} from "@angular/core";
import {UserOverviewComponent} from "./component/user-overview/user-overview.component";
import {
  UserMeasurementHistoryComponent
} from "./component/user-overview/user-measurement-history/user-measurement-history.component";
import {MeasurementWarningComponent} from "./component/measurement-warning/measurement-warning.component";
import {
  UserMeasurementChartsComponent
} from "./component/user-overview/user-measurement-charts/user-measurement-charts.component";
import {AppComponent} from "./app.component";
import {
  UserMeasurementFormComponent
} from "./component/user-overview/user-measurement-form/user-measurement-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { UserInitComponent } from './component/user-init/user-init.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMeasurementChartsComponent,
    UserOverviewComponent,
    UserMeasurementFormComponent,
    UserMeasurementHistoryComponent,
    MeasurementWarningComponent,
    UserInitComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
