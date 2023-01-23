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
import { DetailComponent } from './components/post-detail/detail/detail.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ListConfirmationComponent } from './components/posts/list-confirmation/list-confirmation.component'
import { LoginComponent } from './components/login/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    ListHeaderComponent,
    ListConfirmationComponent,
    PostListComponent,
    DetailComponent,
    LoginComponent,
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
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
