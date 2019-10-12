import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bab-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('type') type: string = "a";
  @Input('size') size: string = null;
  @Input('color') color: string = null;
  @Input('fullwidth') fullwidth: boolean = false;
  @Input('inverted') inverted: boolean = false;
  @Input('rounded') rounded: boolean = false;
  @Input('loading') loading: boolean = false;
  @Input('danger') danger: boolean = false;
  @Input('iconleft') iconleft: string = null;
  @Input('iconright') iconright: string = null;

  @Input('label') label: string;

  constructor() { }

  ngOnInit() {
  }

  getCSSClasses() {
    let classes = ["button"], self = this;
    if (self.size) classes.push("is-" + self.size);
    if (self.color) classes.push("is-" + self.color);
    if (self.fullwidth) classes.push("is-fullwidth");
    if (self.inverted) classes.push("is-inverted");
    if (self.rounded) classes.push("is-rounded");
    if (self.loading) classes.push("is-loading");
    if (self.danger) classes.push("is-danger");
    return classes.join(" ");
  }

}
