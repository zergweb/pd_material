import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
  host: { 'class': '' }
})
export class PageHeaderComponent implements OnInit {
  @Input() headerText: string;
  constructor() { }

  ngOnInit() {
  }

}
