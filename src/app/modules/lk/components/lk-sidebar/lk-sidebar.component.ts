import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lk-sidebar',
  templateUrl: './lk-sidebar.component.html',
  styleUrls: ['./lk-sidebar.component.css'],
  host: { 'class': 'col-md-2 d-none d-md-block bg-white sidebar' }
})
export class LkSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
