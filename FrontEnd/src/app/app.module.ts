import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HeaderComponent } from './components/header/header.component';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {SplitterModule} from 'primeng/splitter';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {KeyFilterModule} from 'primeng/keyfilter';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MessagesModule,
    SplitterModule,
    MenubarModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    DataViewModule,
    ScrollPanelModule,
    KeyFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
