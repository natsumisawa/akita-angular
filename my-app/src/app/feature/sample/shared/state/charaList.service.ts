import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {CharaListStore} from './charaList.store';

@Injectable({ providedIn: 'root' })
export class CharaListService {
  constructor(
    private http: HttpClient,
    private charaStore: CharaListStore,
  ) {}

  getCharas(): Promise<CharaList> {
    return this.http
      .get<{charas: Chara[]}>(`http://localhost:9000/`)
      .pipe(
        tap(res =>  console.log(res.charas)),
        tap(res =>  this.charaStore.set(res.charas))
      )
      .toPromise();
  }
}

export type CharaList = {
  charas: Chara[]
};

export type Chara = {
  id: string,
  name: string
};
