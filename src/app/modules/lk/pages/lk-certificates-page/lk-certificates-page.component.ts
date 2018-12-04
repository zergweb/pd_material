import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lk-certificates-page',
  templateUrl: './lk-certificates-page.component.html',
  styleUrls: ['./lk-certificates-page.component.css']
})
export class LkCertificatesPageComponent implements OnInit {
  public ShowModal: boolean = false;
  public Test: string = "sadfgdfg";
  constructor() { }

  ngOnInit() {

  }
  public showModal() {
    this.ShowModal = true;
  }
  onChanged(val: boolean) {
    this.ShowModal=val;
  }
}
