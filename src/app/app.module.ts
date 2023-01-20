import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PostListComponent } from './components/posts/post-list/post-list.component'
import { HomeComponent } from './components/posts/home/home.component'
import { ListHeaderComponent } from './components/posts/list-header/list-header.component'
import { HomeHeaderComponent } from './components/posts/home-header/home-header.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HomeFooterComponent } from './components/posts/home-footer/home-footer.component'
import { NgxsModule } from '@ngxs/store'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'
import { DataState } from './store/data-store'
import { HttpClientModule } from '@angular/common/http'
import { PostSelectPipe } from './pipes/post-select-pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListHeaderComponent,
    PostListComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    PostSelectPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxsModule.forRoot([]),
    NgxsModule.forFeature([DataState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
