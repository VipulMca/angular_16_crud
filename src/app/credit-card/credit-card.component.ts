import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

const TABLE_DATA: CreditCard[] = [
  {
    id: 1,
    name: "Bank Of India Credit Card",
    description: "This is Bank of India decription",
    bankName:"Bank of india",
    maxCredit: 10000,
    interestRate: 10.5,
    active: true,
    recommendedScore: "700-800",
    termAndCondition: "Following are the term and condition",
    annualFee: 500,
    createdDate: "2023-10-08",
    updatedDate: "2026-10-08",
  },
  {
    id: 2,
    name: "Bank Of India Credit Card",
    description: "This is Bank of India",
    bankName:"Bank of india",
    maxCredit: 10000,
    interestRate: 10.5,
    active: true,
    recommendedScore: "700-800",
    termAndCondition: "Following are the term and condition",
    annualFee: 500,
    createdDate: "2023-10-08",
    updatedDate: "2026-10-08",
  },
  {
    id: 3,
    name: "Bank Of India Credit Card",
    description: "This is Bank of India",
    bankName:"Bank of india",
    maxCredit: 10000,
    interestRate: 10.5,
    active: true,
    recommendedScore: "700-800",
    termAndCondition: "Following are the term and condition",
    annualFee: 500,
    createdDate: "2023-10-08",
    updatedDate: "2026-10-08",
  }
];
@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent {
  displayedColumns:string[] = ["select","id","name","descripion",
  "bankName","maxCredit","interestRate","active"];
  dataCource = new MatTableDataSource(TABLE_DATA);
  selection = new SelectionModel(true,[]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInIt(){
    this.dataCource.paginator = this.paginator;
    this.dataCource.sort = this.sort;
  }
}
