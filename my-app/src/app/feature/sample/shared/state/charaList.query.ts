import { QueryEntity } from '@datorama/akita';
import {CharaListState, CharaListStore} from './charaList.store';
import {Chara} from './charaList.service';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CharaListQuery extends QueryEntity<CharaListState, Chara> {
  // superで親のメソッドにアクセスできる
  // Queryでは読み込みをする
  constructor(protected store: CharaListStore) {
    super(store);
  }
}
