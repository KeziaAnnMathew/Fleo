import { Component, OnInit } from '@angular/core';
import { ChildDetailsService } from '../child-details.service';
import { FactoryModel } from '../factory.model';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {
  parentData:any= new FactoryModel('','','','',0,'','','');
  childNodes: FactoryModel[] | any;
  percentage:any;
  flag=false;

  constructor(private service :ChildDetailsService) { }

  ngOnInit(): void {
    this.parentData= this.service.getTopLevelNodes();
    console.log(this.parentData)
    this.percentage=(this.parentData.total_sales/this.parentData.target_sales)*100;
    console.log(this.percentage)
   
  }
  getChildNodes(){
    // console.log("child");
    // // this.parentData=this.service.getChildNodes(id);
    this.flag=!this.flag;
  }

}
