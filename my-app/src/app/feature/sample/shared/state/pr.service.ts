// import { SessionStore } from './session.store';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PrService {
  constructor(
    private http: HttpClient,
  ) {}

  getPr(): Observable<string> {
    return this.http
      .get(`http://localhost:9000/`)
      .pipe(map(res =>  res.toString()));
  }
}
