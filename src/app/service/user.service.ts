import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/users';

  login(loginRequest: LoginRequest): Observable {
    return this.http.post(this.baseUrl + '/login', loginRequest);
  }
}
