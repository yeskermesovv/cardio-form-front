import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardioService {

  public static readonly CARDIO: string = "/cardio";

  constructor(private _httpClient: HttpClient) {}

  saveDoctor(doctorForm): Observable<any> {
    return this._httpClient.post(`${CardioService.CARDIO}/api/users`, doctorForm);
  }

  saveForm(form): Observable<any> {
    return this._httpClient.post(`${CardioService.CARDIO}/api/questions`, form);
  }
}
