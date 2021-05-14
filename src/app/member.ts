import { NumberValueAccessor } from "@angular/forms";

export default class Member {
  Id:number = 0;
  Email:string = '';
  Password:string = '';
  FirstName:string = '';
  LastName:string = '';

  constructor(Id:number, Email:string, Password:string, FirstName:string, LastName:string) {
    this.Id = Id;
    this.Email = Email;
    this.Password = Password;
    this.FirstName = FirstName;
    this.LastName = LastName;
  }
}
