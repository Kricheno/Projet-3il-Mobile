// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import {Observable} from 'rxjs';
import {Materiel} from '../../Entities/materiel';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class MaterielService {

  private baseURL = 'http://localhost:8080/materiel/retrieve-materiels-by-poste';

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:variable-name
  public getMaterielList(id_Poste: bigint): Observable<Materiel[]>{
    return this.httpClient.get<Materiel[]>(`${this.baseURL}/${id_Poste}`);
  }
}
