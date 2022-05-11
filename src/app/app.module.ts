import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoBlockComponent } from './home/info-block/info-block.component';
import { PopupComponent } from './home/info-block/popup/popup.component';
import { UserDataService } from './home/userData.service';
import { FullNamePipe } from './pipes/fullName.pipe';
import { NameInputComponent } from './home/name-input/name-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoBlockComponent,
    PopupComponent,
    FullNamePipe,
    NameInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
 }
