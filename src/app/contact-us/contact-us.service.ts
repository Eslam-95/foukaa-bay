import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable ({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  sendMail(body) {
    return this.http.post ('/contact', body, {
      headers: new HttpHeaders ({'Content-Type': 'application/json'}),
      responseType: 'text',
    });
  }
}
