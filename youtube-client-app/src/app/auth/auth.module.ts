import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class AuthModule { }
