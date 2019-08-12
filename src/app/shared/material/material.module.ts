// angular base modules.;
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";

import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from '@angular/core';

//Angular Material modules



const modules=[
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  CommonModule
];

@NgModule({
  imports: [modules],
  declarations: [],
  exports: [modules]
})

export class MaterialModule { }
