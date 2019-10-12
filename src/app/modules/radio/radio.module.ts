import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RadioComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RadioComponent
  ]
})
export class RadioModule { }
