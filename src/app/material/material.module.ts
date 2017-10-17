import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	MatButtonModule, 
	MatCheckboxModule, 
	MatDatepickerModule,
	MatToolbarModule,
	MatMenuModule,
	MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
  	MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
