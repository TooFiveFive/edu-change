import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIcon, MatIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {IssueComponent} from './issue/issue.component';
import {NavigatorComponent} from './navigator/navigator.component';
import {AppRoutingModule} from './/app-routing.module';
import {CommentComponent} from './comment/comment.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { NavRouteComponent } from './navigator/nav-route/nav-route.component';
import { HomeComponent } from './home/home.component';
import { RankedinstitutionsComponent } from './rankedinstitutions/rankedinstitutions.component';
import { ResolutionComponent } from './issue/resolution/resolution.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueComponent,
    CommentComponent,
    NavigatorComponent,
    NavRouteComponent,
    HomeComponent,
    RankedinstitutionsComponent,
    ResolutionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
