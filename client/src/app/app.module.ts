import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { PostComponent } from './components/post/post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LatestPostsComponent } from './components/widgets/latestposts/latestposts.component';
import { CategoriesComponent } from './components/widgets/categories/categories.component';
import { TagsComponent } from './components/widgets/tags/tags.component';
import { LoginComponent } from './components/session/login/login.component';
import { RegisterComponent } from './components/session/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PostService } from './services/post.servcie'
import { LoginService } from './services/session/login.service'


const appRoutes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AppComponent,
    ContentComponent,
    PostComponent,
    SidebarComponent,
    LatestPostsComponent,
    CategoriesComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [PostService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
