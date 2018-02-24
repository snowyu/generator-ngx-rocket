import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'bootstrap') { -%>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<% } else if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } else if (props.ui === 'material') { -%>
import { FlexLayoutModule } from '@angular/flex-layout';
<% } -%>

<% if (props.ui === 'material') { -%>
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
<% } -%>
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
<% if (props.ui === 'bootstrap') { -%>
    NgbModule,
<% } else if (props.ui === 'ionic') { -%>
    IonicModule,
<% } else if (props.ui === 'material') { -%>
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
<% } -%>
    LoginRoutingModule
  ],
<% if (props.ui === 'ionic') { -%>
  entryComponents: [
    LoginPageComponent
  ],
<% } -%>
  declarations: [
    LoginPageComponent
  ]
})
export class LoginModule { }
