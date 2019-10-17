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
    MatDialogModule,
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
export class AppModule { }
