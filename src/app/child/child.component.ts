import { Component, Input, OnChanges, OnInit } from '@angular/core';
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

  childArray:FactoryModel[]=[]

  ngOnChanges(){
    console.log(this.childId);
    for( let i =0 ; i<this.childId.length ; i++  ){
      this.service.getFullDate().forEach((val:any)=>{
        if((val._id) === (i+1) ){
          this.childArray.push(val)
        }
      })
    }
  }
  ngOnInit(): void {
  }

}
