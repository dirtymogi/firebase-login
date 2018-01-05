import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  name: string;
  email: string;
  password: string;
  urlImage: string;

  constructor(public afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  }

  addFacebook() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider()).then((res: any) => {
      firebase.auth().currentUser.linkWithCredential(res.credential).then((user) => {
        console.log('OK');
      }, (erro) => {
        console.log('ERRO');
      });
    }).catch((erro: any) => {
      firebase.auth().currentUser.linkWithCredential(erro.credential).then((user) => {
        console.log('OK');
      }, (erro) => {
        console.log('ERRO');
      });
    });
  }

  loginEmail() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch((erro: any) => {
      console.log(erro);
    });
  }

  addEmail() {
    let credential = firebase.auth.EmailAuthProvider.credential(this.email, this.password);
    firebase.auth().currentUser.linkWithCredential(credential).then((user) => {
      console.log('OK');
    }, (erro) => {
      console.log(erro);
      console.log('ERRO');
    });
  }


  createEmail() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((res: any) => {
      console.log(res);
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: this.name,
        photoURL:  this.urlImage
      });

    }).catch((erro: any) => {
      console.log(erro);
    });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }


}
