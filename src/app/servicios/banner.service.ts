import { Banner } from './../model/banner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  URL = 'https://portfolio-bkd.herokuapp.com/banner/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.URL+'lista');
  }

  public detail(id:number): Observable<Banner>{
    return this.httpClient.get<Banner>(this.URL+`detail/${id}`);
  }

  public save(banner: Banner): Observable<any>{
    return this.httpClient.post<any>(this.URL+'create', banner);
  }

  public update(id: number, banner: Banner): Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`, banner);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+`delete/${id}`);
  }
}


