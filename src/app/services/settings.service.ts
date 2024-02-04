import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import Settings from '../types/Settings';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private apiUrl = 'http://localhost:3000/settings';

  constructor(private httpClient: HttpClient) {}

  getSettings(): Observable<Settings> {
    return this.httpClient.get<Settings>(this.apiUrl);
  }

  updateSettings(settings: Settings): Observable<Settings> {
    return this.httpClient.put<Settings>(this.apiUrl, settings, httpOptions);
  }
}
