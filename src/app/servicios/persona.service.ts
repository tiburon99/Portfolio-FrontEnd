import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = "https://portfolio-bkd.herokuapp.com/personas/";

  constructor(private http:HttpClient) { }

  public getPersonas(): Observable<persona>{
    return this.http.get<persona>(this.URL+"listar/perfil");
  }
}
