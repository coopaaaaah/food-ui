import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';
import { ErrorContentComponent } from "./components/error-content/error-content";
import { MainContentComponent } from "./routes/main-content/main-content";
import {FoodCardComponent} from "./components/food-card/food-card";

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    ErrorContentComponent,
    FoodCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
