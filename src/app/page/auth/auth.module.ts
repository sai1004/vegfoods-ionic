import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from "./login/login.page";

import { IonicModule } from "@ionic/angular";
import { SharedModule } from "src/app/shared/shared.module";

const routes: Routes = [
  {
    path: "login",
    component: LoginPage,
  },
];

@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    SharedModule,
    FormsModule,
  ],
  exports: [RouterModule, IonicModule],
})
export class AuthModule {}
