import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  // Set vars
  public openModal:boolean;
  public infoUser:FormGroup;

  // Set FormBuilder
  constructor(private fb:FormBuilder){}

  // Set FormGroup
  public userForm:FormGroup = this.fb.group({
    firstname : ['',[Validators.required , Validators.pattern(/^[A-Z]+$/i), Validators.minLength(3)]],
    lastname : ['',[Validators.required , Validators.pattern(/^[A-Z]+$/i), Validators.minLength(3)]],
    birthday : ['',Validators.required],
    gender : ['',Validators.required],
    cellphone : ['',[Validators.required, Validators.minLength(8), Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)]],
    homephone : ['',[Validators.required, Validators.minLength(8),Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)]],
    address : ['',[Validators.required, Validators.minLength(5)]],
    profession : ['', [Validators.required, Validators.minLength(5)]],
    incomes : ['', Validators.required]
  });

  ngOnInit(): void {}

  //Open modal
  showDataUser = () => { 
    this.infoUser = this.userForm.value;
    this.openModal = true;
  };

  // Close modal
  closeModal = () => this.openModal = false;

}
