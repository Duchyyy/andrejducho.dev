import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticleComponent } from './article/article.component';
import { ProjectComponent } from './project/project.component';
import { ProfileComponent } from './profile/profile.component';
import { BioEventComponent } from './bio-event/bio-event.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: ProfileComponent },
  { path: 'experience', component: BioEventComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'admin/**', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
