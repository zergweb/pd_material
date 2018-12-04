import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    //private api_url: string = "http://localhost:12111/";

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    login(username: string, password: string) {
      let user: User = { access_token: "some.token", username: username, password: password, role: ["admin"] };
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  console.log(localStorage.getItem('currentUser'));
                  this.currentUserSubject.next(user);              
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    isAuth() {
      if (this.currentUserSubject.value) {
        return true;
       }  
      return false;
    }
}
