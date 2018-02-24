import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } else if (props.ui === 'material') { -%>
import { FlexLayoutModule } from '@angular/flex-layout';
<% } -%>

<% if (props.ui === 'material') { -%>
import { MaterialModule } from '@app/material.module';
<% } -%>
import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
<% if (props.ui === 'ionic') { -%>
    IonicModule,
<% } else if (props.ui === 'material') { -%>
    FlexLayoutModule,
    MaterialModule,
<% } -%>
    AboutRoutingModule
  ],
<% if (props.ui === 'ionic') { -%>
  entryComponents: [
    AboutPageComponent
  ],
<% } -%>
  declarations: [
    AboutPageComponent
  ]
})
export class AboutModule { }
