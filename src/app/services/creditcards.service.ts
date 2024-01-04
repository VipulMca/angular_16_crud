import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {
  private apiUrl = "http://localhost:3000/creditcards";
  constructor(private HTTPClint: HttpClient) { }

  createCreditCard(CreditCard: CreditCard): Observable<CreditCard[]> {
    return this.HTTPClint.post<CreditCard[]>(this.apiUrl, CreditCard);
  }

  getCreditCard(): Observable<CreditCard[]> {
    return this.HTTPClint.get<CreditCard[]>(this.apiUrl);
  }

  getCreditCardById(id: number): Observable<CreditCard[]> {
    return this.HTTPClint.get<CreditCard[]>(this.apiUrl + `/${id}`);
  }

  updateCreditCard(CreditCard: CreditCard): Observable<CreditCard[]> {
    return this.HTTPClint.put<CreditCard[]>(this.apiUrl + `/${CreditCard.id}`, CreditCard)
  }

  deleteCreditCardById(id: number): Observable<void> {
    return this.HTTPClint.delete<void>(this.apiUrl + `/${id}`);
  }
}
