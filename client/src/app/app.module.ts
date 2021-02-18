import { HttpInterceptorService } from './auth/httpInterceptor.service';
import { AuthService } from './auth/auth.service';
import { ProfileService } from './service/profile.service';
import { BioEventService } from './service/bio-event.service';
import { ArticleService } from './service/article.service';
import { UserService } from './service/user.service';
import { ProjectService } from './service/project.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioEventComponent } from './bio-event/bio-event.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { ArticleComponent } from './article/article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BioEventComponent,
    LoginComponent,
    ProfileComponent,
    ProjectComponent,
    ArticleComponent,  
    PageNotFoundComponent,
    UserComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProjectService, UserService, ArticleService, BioEventService, ProfileService, AuthService, {  
    provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
