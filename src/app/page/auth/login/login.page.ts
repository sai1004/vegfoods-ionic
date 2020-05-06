import { Component, OnInit, Input } from "@angular/core";
import { Auth } from "../../../entities/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  @Input()
  auth: Auth;
  constructor() {}

  ngOnInit() {}
}
