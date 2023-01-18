import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RepoContainerComponent } from './repo-container/repo-container.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoaderComponentComponent } from './loader-component/loader-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoContainerComponent,
    ProfilePageComponent,
    LoaderComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
