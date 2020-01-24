import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { FormListModule } from './form-list/form-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormListModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
