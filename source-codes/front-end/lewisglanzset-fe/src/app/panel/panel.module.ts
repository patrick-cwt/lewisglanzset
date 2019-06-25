import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactRecordsPanelComponent } from './contact-records-panel/contact-records-panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContactRecordsPanelComponent
  ],
  exports: [
    ContactRecordsPanelComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: []
})
export class PanelModule { }
