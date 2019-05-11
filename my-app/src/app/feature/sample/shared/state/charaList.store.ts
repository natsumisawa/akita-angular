import {EntityState, EntityStore, Store, StoreConfig} from '@datorama/akita';
import {Chara} from './charaList.service';
import {Injectable} from '@angular/core';

export interface CharaListState extends EntityState<Chara> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'charaList', idKey: 'id' })
export class CharaListStore extends EntityStore<CharaListState, Chara> {
  constructor() {
    super();
  }
}
