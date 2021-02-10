import { TagService } from './service/tag.service';
import { ProfileService } from './service/profile.service';
import { BioEventService } from './service/bio-event.service';
import { ArticleService } from './service/article.service';
import { AdminService } from './service/admin.service';
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
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
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
    ArticleDetailComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProjectService, AdminService, ArticleService, BioEventService, ProfileService, TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
