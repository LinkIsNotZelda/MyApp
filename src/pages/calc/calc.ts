import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html',
})
export class CalcPage {

  num1 : string='';
  expression : string='';
  operation : string="None";
  res : number=0;
  showRes : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcPage');
  }

  doCalc(n){
    if ('0123456789'.indexOf(n) !== -1) {
      this.logEventNum(n);
    }else{
      this.logEventOp(n);
    }
    
  }



  logEventNum(i){
    this.num1=this.num1.concat(i);
    this.expression=this.expression.concat(i);
  }

  logEventOp(op){

    
      if(op=='AC'){
        this.res=0;
        this.num1='';
        this.operation="None";
        this.expression='';
      }
      else{

      if(this.operation=="None"){
        this.res=Number(this.num1);

      }
      else{

        switch(this.operation){
          case "+":
          this.res += Number(this.num1);
          break;
          case '-':
          this.res -= Number(this.num1);
          break;
          case '*':
          this.res *= Number(this.num1);
          break;
          case '/':
          this.res /= Number(this.num1);
          break;      
          default:
          this.res=-11111;
        }//switch end

        this.showRes=true;

      }

      this.num1='';
      this.operation=op;
      this.expression=this.expression.concat(op);

    }




  }//function end

}//class end
