import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioComponent),
  multi: true
};

const noop = () => {
};

@Component({
  selector: 'bab-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  private _value: any = '';
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  @Input('disabled') disabled: boolean = null;
  @Input('loading') loading: boolean = null;
  @Input('options') options: any[] = [];
  @Input('name') name: string = "";
  @Input('optionkey') optionkey: string = "";
  @Input('optionvalue') optionvalue: string = "";

  constructor() { }

  ngOnInit() {
  }

  //get accessor
  get value(): any {
    return this._value;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    console.log(v);
    if (v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this._value) {
      this._value = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
