import { Component, OnInit, Input } from "@angular/core";
import { Auth } from "../../../entities/auth";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  ngForm: NgForm;
  @Input()
  auth: Auth;
  constructor() {}

  ngOnInit() {}

  onLogin(LoginForm: NgForm) {
    console.log(LoginForm);
  }
}
