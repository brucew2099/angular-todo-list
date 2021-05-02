import { NumberValueAccessor } from "@angular/forms";

export default class Todo {
  Id:number = 0;
  Item:string = '';
  Category:string = '';
  Done:boolean = false;
  Importance:number = 0;
  ForDate:Date = new Date();
  Who:string = '';

  constructor(Id:number, Item:string, Category:string,
      Done:boolean, Importance:number, ForDate:Date, Who:string) {
    this.Id = Id;
    this.Item = Item;
    this.Category = Category;
    this.Done = Done;
    this.Importance = Importance;
    this.ForDate = ForDate;
    this.Who = Who;
  }
}
