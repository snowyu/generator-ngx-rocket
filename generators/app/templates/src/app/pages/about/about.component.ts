import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutPageComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }

}
