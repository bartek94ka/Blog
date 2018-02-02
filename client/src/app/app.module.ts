import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { GlobalEventsManager } from './GlobalEventsManager'
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
import { UserDetailsComponent } from './components/userdetails/userdetails.component'
import { NewPostComponent } from './components/newpost/newpost.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { PostListComponent } from './components/postlist/postlist.component';
import { PostCategoryComponent } from './components/postcategory/postcategory.component';

import { PostService } from './services/post.servcie';
import { LoginService } from './services/session/login.service';
import { RegisterService } from './services/session/register.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { CommentService } from './services/comment.service';


const appRoutes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userdetails', component: UserDetailsComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: 'workspace/newpost', component: NewPostComponent },
  { path: 'workspace/postlist', component: PostListComponent },
  { path: 'postcategory/:id', component : PostCategoryComponent }
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
    TagsComponent,
    UserDetailsComponent,
    WorkspaceComponent,
    NewPostComponent,
    PostListComponent,
    PostCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [
    CookieService, 
    PostService, 
    LoginService,
    RegisterService, 
    UserService,
    CategoryService,
    CommentService, 
    GlobalEventsManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
