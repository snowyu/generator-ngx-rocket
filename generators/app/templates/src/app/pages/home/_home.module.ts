import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } else if (props.ui === 'material') { -%>
import { FlexLayoutModule } from '@angular/flex-layout';
<% } -%>

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
<% if (props.ui === 'material') { -%>
import { MaterialModule } from '@app/material.module';
<% } -%>
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.component';
import { QuoteService } from './quote.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
<% if (props.ui === 'ionic') { -%>
    IonicModule,
<% } else if (props.ui === 'material') { -%>
    FlexLayoutModule,
    MaterialModule,
<% } -%>
    HomeRoutingModule
  ],
<% if (props.ui === 'ionic') { -%>
  entryComponents: [
    HomePage
  ],
<% } -%>
  declarations: [
    HomePage
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
