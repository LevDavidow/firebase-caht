import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';

  constructor(private af: AngularFireAuth, private db: AngularFireDatabase) {
  	this.items = db.list('/messages', {
  		query: {
  			limitToLast: 5
  		}
  	});

  	af.authState.subscribe(user => {
  		this.name = user ? user.displayName : null;
  	});
  }

  login() {
  	this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
  	this.af.auth.signOut();
  }

  sendMessage(message: string) {
  	this.items.push({
  		message,
  		name: this.name
  	});

  	this.msgVal = '';
  }
}
