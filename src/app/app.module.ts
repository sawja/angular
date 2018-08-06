import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { DetailsComponent } from './components/details/details.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { SearchPipe } from './pipes/search.pipe';
import { GroupPipe } from './pipes/group.pipe';

import { registerLocaleData } from '@angular/common'
import localePl from '@angular/common/locales/pl'
import localePlExtra from '@angular/common/locales/extra/pl'

registerLocaleData(localePl, 'pl-PL', localePlExtra)


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DetailsComponent,
    StudentAddComponent,
    SearchPipe,
    GroupPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
