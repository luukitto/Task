import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SaveButtonService {
  buttonUrl = 'https://reqres.in/api/posts'

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.request('POST', this.buttonUrl, {responseType: 'json'})
  }

}
