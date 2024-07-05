import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  // In Ts -> String,number,boolean,Date,void(any)

  courseName: string = "Angular 18";
  inputType: string = "radio";
  price: number = 199.99;
  isActive: boolean = true;
  currentDate: Date = new Date();
  stateName: string = "Kolkata";
  
  firstName =  signal("Akash Halder");

  constructor(){

  }

  changeCourseName() {
    this.courseName = "React Js";
    this.firstName.set("Nil");
  }

  showAlert(msg: string){
    alert(msg);
  }

}
