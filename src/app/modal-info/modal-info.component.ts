import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {

  @Input('statusOpen') set statusOpen(value:boolean){
    this.openStatus = value;
  } 

  @Input('infoData') set infoData(value:any){
    this.infoUser = value;
  }

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  public openStatus:boolean;
  public infoUser:any;

  constructor(){ }
  
  ngOnInit(): void {}

  // Close modal
  close = () =>  {
    this.openStatus = false;
    this.closeModal.emit();
  }

}
