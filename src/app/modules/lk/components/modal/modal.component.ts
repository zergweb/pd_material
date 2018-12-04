import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  host: { 'class': '' }
})
export class ModalComponent implements OnInit {
  @Input() isShow: boolean = false;
  @Input() Title: string;
  @Output() onChanged = new EventEmitter<boolean>();
  constructor() { }
  ngOnInit() {
  }
  close() {
    //this.isShow = false;
    this.onChanged.emit(false);
  }
}
