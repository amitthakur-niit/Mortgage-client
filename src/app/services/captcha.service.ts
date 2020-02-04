import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  private url = 'http://localhost:8765/user-registration-service/users/verify/captcha';

  constructor(private http: HttpClient) { }

  verifyCatcha(captcha) {
    return this.http.post(this.url, {captcha: captcha});
  }
}
