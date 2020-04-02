import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent} from './footer/footer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {InputComponent} from './input/input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {OutputComponent} from './output/output.component';
import {CatDataService} from './cat-data.service';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        InputComponent,
        OutputComponent
    ],
  imports: [
    BrowserModule,
    RouterTestingModule,
    ReactiveFormsModule
  ],
  providers: [CatDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
