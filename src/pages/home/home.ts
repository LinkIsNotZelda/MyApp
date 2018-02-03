import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalcPage } from '../../pages/calc/calc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  boto : string = "Prem-me !!!";
  color : string = "secondary";
  text : string = "No se...";
  name : string = "";
  showName : boolean = false;

  constructor(public navCtrl: NavController) {

  }

  logEvent(event) {
    console.log("Click !!!");
    console.log(event);

    this.boto = "Molt bé !!!";
    this.color = "danger";

    if(name) this.showName = true;
  }

  gotoAbout(event) {
    console.log("About !!!");
    console.log(JSON.stringify(event));
    
    this.navCtrl.push(CalcPage);

  }
}
