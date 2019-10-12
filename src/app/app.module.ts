import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { InputModule } from './modules/input/input.module';
import { RadioModule } from './modules/radio/radio.module';
import { TextareaModule } from './modules/textarea/textarea.module';
import { SelectModule } from './modules/select/select.module';
import { CheckboxModule } from './modules/checkbox/checkbox.module';
import { ButtonModule } from './modules/button/button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputModule,
    TextareaModule,
    SelectModule,
    CheckboxModule,
    RadioModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
