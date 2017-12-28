import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { PostComponent } from './components/post/post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LatestPostsComponent } from './components/widgets/latestposts/latestposts.component';
import { CategoriesComponent } from './components/widgets/categories/categories.component';
import { TagsComponent } from './components/widgets/tags/tags.component';

@NgModule({
  declarations: [
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
