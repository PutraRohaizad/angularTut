import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {

  homeTitle : string = "Homepage";

  constructor() { }

  ngOnInit() {
  }

}
