import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tile } from '../types/Tile';

@Injectable({
  providedIn: 'root',
})
export class TileService {
  private apiUrl = 'http://localhost:3000/tiles';

  constructor(private httpClient: HttpClient) {}

  getTiles(): Observable<Tile[]> {
    return this.httpClient.get<Tile[]>(this.apiUrl);
  }
}
