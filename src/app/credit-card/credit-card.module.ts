import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardComponent } from './credit-card.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    CreditCardComponent,
    EditComponent,
    ViewComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule, MatCardModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatCheckboxModule
  ],
  providers: []
})
export class CreditCardModule { }
