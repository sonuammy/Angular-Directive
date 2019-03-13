import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {

  // Style property
  username: string = '';
  password: string = '';
  msg: string = '';
  myColor: string = '';
  checkLogin() {
    if(this.username === 'admin' && this.password === 'admin123') {
      this.msg = 'Successful Login';
      this.myColor = 'green';
    }
    else{
      this.msg = 'Invalid Login';
      this.myColor = 'red';
    }
  }

  // 1. ngStyle 
  borderStyle = '2px solid black';
  alertStyle = {
    'color' : 'red',
    'font-weight' : 'bold',
    'margin' : '10px',
    'border' : this.borderStyle
  }

  // 2. ngStyle 
  isBold: Boolean = true;
  isColor: Boolean = true;
  isFontSize: Number = 30;
  setMyStyle() {
    let styles = {
      'background-color': this.isColor ? 'red' : 'transparent',
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-size.px': this.isFontSize,
      'border-radius' : '25px'
    };
    return styles;
  }

  // Class Property
  classesToApply: String = 'boldClass italicClass';
  applyBoldClass: Boolean = true;
  applyBoldClass1: Boolean = false;
  applyBoldClass2: Boolean = false;

  // ngClass
  applyBoldsClass: Boolean = true;
  applyItalicClass: Boolean = true;

  addClass() {
    const classes = {
      boldClass: this.applyBoldsClass,
      italicClass: this.applyItalicClass,
    };
    return classes;
  }
}
