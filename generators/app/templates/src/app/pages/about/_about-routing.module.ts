import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<% if (props.lazy) { -%>
import { extract } from '@app/core';
<% } else { -%>
import { Route, extract } from '@app/core';
<% } -%>
import { AboutPage } from './about.component';

const routes: Routes = [
<% if (props.lazy) { -%>
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: AboutPage, data: { title: extract('About') } }
<% } else { -%>
  Route.withShell([
    { path: 'about', component: AboutPage, data: { title: extract('About') } }<% if (props.lazy) { %> as Route <% } %>
  ])
<% } -%>
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
