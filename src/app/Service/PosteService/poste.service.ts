// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import {Observable} from 'rxjs';
import {Poste} from '../../Entities/poste';



// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class PosteService {


  private baseURL = 'http://localhost:8080/poste/retrieve-postes-by-salle';

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:variable-name
  public getPostes(id_Salle: number): Observable<Poste[]> {
    return this.httpClient.get<Poste[]>(`${this.baseURL}/${id_Salle}`);
  }


}
