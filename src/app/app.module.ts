import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MynavComponent } from './mynav/mynav.component';
import { MyfootComponent } from './myfoot/myfoot.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SecpageComponent } from './secpage/secpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    MyfootComponent,
    SecpageComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
