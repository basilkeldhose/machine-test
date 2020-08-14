import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 itemForm =new FormGroup({
   itemname: new FormControl("",Validators.required),
   itemprice:new FormControl("",Validators.required),
   itemquantity:new FormControl("",Validators.required)
 })
  constructor() { }
  total
  item=[]
  grandtotal =[]
  final
  ngOnInit(): void {
  }
  onSubmit(){
 
  this.item.push(this.itemForm.value)
  this.total=this.itemForm.value.itemprice * this.itemForm.value.itemquantity
  // this.final = this.total
  this.grandtotal.push(this.total)
  }
  
  
  delete(item){
   let i= this.item.indexOf(item)
    this.item.splice(i,1)
  }

}
