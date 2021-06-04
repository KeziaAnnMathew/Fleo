import { Component, Input, OnChanges, OnInit, AfterViewInit } from '@angular/core';
import { FactoryModel } from '../factory.model'
import { ChildDetailsService } from '../child-details.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges {

  constructor(public service:ChildDetailsService) { }

  @Input() childId : any

  childArray:FactoryModel[] |any
  flag=false;

  ngOnChanges(){
    console.log(this.childId);
    this.childArray=this.service.getChildNodes(this.childId);
    console.log(this.childArray)
    // for( let i =0 ; i<this.childId.length ; i++  ){
    //   this.service.getFullDate().forEach((val:any)=>{
    //     if((val._id) === (i+1) ){
    //       this.childArray.push(val)
    //     }
    //   })
    // }
  }
  ngOnInit(): void {
  }
  getChildNodes(id:any){
    // console.log(id);
    // this.childArray=this.service.getChildNodes(thischildId);
    this.childId=id;
    // console.log(this.parentData)
    this.flag=!this.flag;
  }

}
