import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Resolve } from '@angular/router';

interface resService {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  async getToken() {
    return new Promise<resService>((resolve: any, reject: any) => {
      try {
        this.http.get<resService>("https://spoty-app-backend.herokuapp.com/token").subscribe(token => {
          console.log(token)
          resolve(token)
        })
      } catch (error) {
        console.log("Fallo token")
        reject(error)
      }
    })
  }
}
