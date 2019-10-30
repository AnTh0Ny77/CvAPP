import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { MatDialogModule } from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { FormsModule} from '@angular/forms';
import { TimelineComponent } from './timeline/timeline.component';
import { Error404Component } from './error404/error404.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    ModalComponent,
    TimelineComponent,
    Error404Component,
    FrontComponent,
    BackComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyAWEWUW3ddGmWoER_TmEvvTa0gLxXgS7Y8",
      authDomain: "appcv-76f02.firebaseapp.com",
      databaseURL: "https://appcv-76f02.firebaseio.com",
      projectId: "appcv-76f02",
      storageBucket: "appcv-76f02.appspot.com",
      messagingSenderId: "928832629037",
      appId: "1:928832629037:web:5d0e700ca78ffe6e1f0ba4",
      measurementId: "G-28QD079QKC"
    }),
    AngularFireDatabaseModule,
    MatDialogModule,
    MatExpansionModule,
    AngularFirestoreModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})

export class AppModule { 
  
}
