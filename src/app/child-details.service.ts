import { Injectable } from '@angular/core';
import factories from './factory_details.json';
@Injectable({
  providedIn: 'root'
})
export class ChildDetailsService {

  constructor() { }

  getTopLevelNodes(){
    for(var i=0;i<factories.length;i++){
     if(factories[i].parent_id == null){
      return (factories[i]);
     }
    }
  }
  getChildNodes(parent_id:any){
    var list=[];
    for(var i=0;i<factories.length;i++){
      if(factories[i].parent_id == parent_id){
       list.push(factories[i])
      }
     }
     return (list);
  }
  getFullDate(){
    return factories;
  }
}
