import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { PadraoLoginComponent } from '../../components/padrao-login/padrao-login.component';

@NgModule({
  declarations: [
    LoginComponent,
    PadraoLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
