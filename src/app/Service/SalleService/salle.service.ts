// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import {Observable} from 'rxjs';
import {Salle} from '../../Entities/salle';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class SalleService {

  private baseURL = 'http://localhost:8080/salle/retrieve-all-salles';

  constructor(private httpClient: HttpClient) { }

  public getSallesList(): Observable<Salle[]>{
    return this.httpClient.get<Salle[]>(`${this.baseURL}`);
  }
}
