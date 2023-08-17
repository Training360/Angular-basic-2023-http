import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './common/nav/nav.component';
import { BtnGroupComponent } from './common/btn-group/btn-group.component';
import { SelectDirective } from './common/btn-group/select.directive';
import { BooleanPipe } from './pipe/boolean.pipe';
import { ArrayFilterPipe } from './pipe/array-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BtnGroupComponent,
    SelectDirective,
    BooleanPipe,
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
