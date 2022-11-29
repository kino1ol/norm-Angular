import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "./auth/authService.service";


const routes: Routes = [
  {
    path: "",
    redirectTo: "sign/in",
    pathMatch: 'full',
  },
  { path: 'sign', loadChildren: () => import('./sign/sign.module').then(m => m.SignModule) },
  { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule), canActivate: [AuthService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
