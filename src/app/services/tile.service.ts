import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tile } from '../types/Tile';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TileService {
  private apiUrl = 'http://localhost:3000/tiles';

  constructor(private httpClient: HttpClient) {}

  getTiles(): Observable<Tile[]> {
    return this.httpClient.get<Tile[]>(this.apiUrl);
  }

  updateTile(tile: Tile): Observable<Tile> {
    return this.httpClient.put<Tile>(
      `${this.apiUrl}/${tile.id}`,
      tile,
      httpOptions
    );
  }

  addTile(tile: Tile): Observable<Tile> {
    return this.httpClient.post<Tile>(this.apiUrl, tile, httpOptions);
  }

  deleteTile(tile: Tile): Observable<Tile> {
    return this.httpClient.delete<Tile>(`${this.apiUrl}/${tile.id}`);
  }
}
