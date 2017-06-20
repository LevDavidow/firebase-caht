import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyDMfokRnbKeiBPSZGJ4aYYQuPWDZvfd-7M",
  authDomain: "test-ng2-chat.firebaseapp.com",
  databaseURL: "https://test-ng2-chat.firebaseio.com",
  projectId: "test-ng2-chat",
  storageBucket: "test-ng2-chat.appspot.com",
  messagingSenderId: "810243236572"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
