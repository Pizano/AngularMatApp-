import { NgModule } from '@angular/core';

import {
MatButtonModule,
MatMenuModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatSidenavModule,
MatRadioModule,
MatListModule,
MatTableModule,
MatCheckboxModule,
MatFormFieldModule,
MatInputModule,
MatPaginatorModule,
MatSortModule,
MatProgressBarModule,
MatDialogModule,
MatGridListModule

} from '@angular/material';

import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';

import {
    BrowserAnimationsModule    
} from '@angular/platform-browser/animations';

@NgModule({
imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatGridListModule
     
],
exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatGridListModule
     
]
})
export class MaterialModule {}