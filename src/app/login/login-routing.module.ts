import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MainComponent} from '../main/main.component';
import { RegisterComponent } from './register/register.component';

import '../../styles/vendor.css';

const routes: Routes = [
  {path: 'login', component:LoginComponent } ,
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule{};
