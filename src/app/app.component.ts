import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!-- <div class="root">
      <div>
        <h1>Tour of Heroes</h1>
        <button routerLink="/">Dashboard</button>
        <button routerLink="/her">Heroes</button> -->
        <router-outlet></router-outlet>
      <!-- </div>
    </div> -->
  `,
  styles: [
    // `button {
    //   padding: 20px;
    //   border: 0;
    //   background-color: gray;
    //   margin: 0 10px;
    //   color: black;
    //   display: inline-block;
    //   cursor: pointer;
    // }`,
  ]
})
export class AppComponent {
  public title = 1;
}
