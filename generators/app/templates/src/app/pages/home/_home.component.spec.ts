import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } else if (props.ui === 'material') { -%>
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
<% } -%>

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
<% if (props.ui === 'material') { -%>
import { MaterialModule } from '@app/material.module';
<% } -%>
import { HomePage } from './home.component';
import { QuoteService } from './quote.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
<% if (props.ui === 'ionic') { -%>
          IonicModule.forRoot(HomePage),
<% } else if (props.ui === 'material') { -%>
          BrowserAnimationsModule,
          FlexLayoutModule,
          MaterialModule,
<% } -%>
          CoreModule,
          SharedModule,
          HttpClientTestingModule
        ],
        declarations: [HomePage],
        providers: [QuoteService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
