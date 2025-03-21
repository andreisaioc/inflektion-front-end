import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ApprovalsComponent } from './pages/approvals/approvals.component';
import { DataTableComponent } from './modules/data-table/data-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TableDataService } from './services/table-data/table-data.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    PartnersComponent,
    ApprovalsComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
