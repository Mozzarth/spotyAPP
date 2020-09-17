import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { END_POINT } from '../../constant'
import { AuthService } from './auth.service';
import { INewReleases } from 'src/interface';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  async newReleases(country = "es", limit = 10, offset = 0) {
    let token = await this.auth.getToken()
    let headers = new HttpHeaders({ "Authorization": `${token.token_type} ${token.access_token}` })
    return this.http.get<INewReleases>(`${END_POINT}/browse/new-releases?country=${country}&?limit=${limit}&?offset=${offset}`, { headers })
  }

}
