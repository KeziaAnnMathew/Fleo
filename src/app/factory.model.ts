export class FactoryModel{
    constructor(
        public factory_name:string,
        public total_sales:string,
        public target_sales:string,
        public track_status:string,
        public child_nodes:number,
        public parent_id:string,
        public child_id:string,
        public _id:string
    ){

    }
}