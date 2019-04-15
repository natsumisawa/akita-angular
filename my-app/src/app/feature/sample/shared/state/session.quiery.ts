import { Query} from '@datorama/akita';
import {SessionState, SessionStore} from './session.store';

export class SessionQuiery extends Query<SessionState> {
  // superで親のメソッドにアクセスできる
  // Queryでは読み込みをする
  isLoggedIn$ = this.select(state => !!state.token);
  selectName$ = this.select('name');

  constructor(protected store: SessionStore) {
    super(store);
  }
}
