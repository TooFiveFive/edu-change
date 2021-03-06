import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueComponent } from './issue/issue.component';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RankedinstitutionsComponent} from './rankedinstitutions/rankedinstitutions.component';

const appRoutes: Routes = [
  { path: 'issue/:id', component: IssueComponent },
  { path: 'issues/:id', redirectTo: 'issue/:id' },
  { path: 'home', component: HomeComponent },
  { path: 'global', component: RankedinstitutionsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
