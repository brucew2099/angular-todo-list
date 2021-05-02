import { NumberValueAccessor } from "@angular/forms";

export default class Member {
  Id:number = 0;
  Email:string = '';
  Password:string = '';
  Created:Date = new Date();
  Active:boolean = true;
  FirstName:string = '';
  LastName:string = '';

  constructor(Id:number, Email:string, Password:string,
      Created:Date, Active:boolean, FirstName:string, LastName:string) {
    this.Id = Id;
    this.Password = Password;
    this.Email = Email;
    this.Created = Created;
    this.Active = Active;
    this.FirstName = FirstName;
    this.LastName = LastName;
  }
}
