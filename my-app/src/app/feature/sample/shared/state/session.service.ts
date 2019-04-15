import { SessionStore } from './session.store';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class SessionService {
  constructor(
    private sessionStore: SessionStore,
    private http: HttpClient,
  ) {}

  updateUserName(newName: string) {
    this.sessionStore.update(state => ({
      name: newName
    }));
  }

  login(creds) {
    return this.http.post('api/login', creds)
      .pipe(tap(user => {
        this.sessionStore.update(user);
      }));
  }
}
