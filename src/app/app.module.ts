import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoBlockComponent } from './home/info-block/info-block.component';
import { PopupComponent } from './home/info-block/popup/popup.component';
import { UserDataService } from './home/userData.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FullNamePipe } from './pipes/fullName.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoBlockComponent,
    PopupComponent,
    FullNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
 }
