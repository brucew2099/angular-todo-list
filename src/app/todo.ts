import { NumberValueAccessor } from "@angular/forms";

export default class Todo {
  Id:number = 0;
  Item:string = '';
  Category:string = '';
  Completed:boolean = false;
  Importance:number = 0;

  constructor(Id:number, Item:string, Category:string, Completed:boolean, Importance:number) {
    this.Id = Id;
    this.Item = Item;
    this.Completed = Completed;
    this.Importance = Importance;
  }
}
