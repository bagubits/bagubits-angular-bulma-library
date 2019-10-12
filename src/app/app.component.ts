import { Component } from '@angular/core';

@Component({
  selector: 'bab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bagubits-angular-bulma-library';

  public test1: string = "ciao";
  public test2: string = "ciao";
  public test3: string = "test1";
  public test3ds: any[] = [{ name: "test1" }, { name: "test2" }, { name: "test3" }];
  public test4: boolean = true;
  public test5ds: any[] = [{ name: "test1", id: "1" }, { name: "test2", id: "2" }, { name: "test3", id: "3" }];
  public test5: string = "test1";
}
