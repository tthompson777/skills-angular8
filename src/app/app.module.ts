import { HttpClientModule } from '@angular/common/http';
import { NgModule  } from '@angular/core';
import { BREAKPOINT, FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatChipsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';
import { CoreModule } from './core/index';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatChipsModule, MatCardModule, CoreModule, HttpClientModule, InMemoryWebApiModule.forRoot(FakeApiService, {delay: 5000}) ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent, CardComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
