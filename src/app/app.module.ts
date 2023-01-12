import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PostListComponent } from './components/post-list/post-list.component'
import { HomeComponent } from './components/home/home.component'
import { ListHeaderComponent } from './components/list-header/list-header.component'
import { FontAwesomeModule } from '@fortawesome/fontawesome-svg-core'

@NgModule({
  declarations: [AppComponent, HomeComponent, ListHeaderComponent, PostListComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
