import { Component } from "@angular/core";
import { LoaderService } from "./core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  name = "Angular";
  imgBack = './img/back-logo.png'

  constructor(public loaderService: LoaderService) {}
}
