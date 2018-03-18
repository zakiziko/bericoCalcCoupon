import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  metrage:number;
  nb265:number;
  nb285:number;
  chut:number;
  show:boolean;
  constructor(public navCtrl: NavController) {

  }
  calculer(){
    let nb2 = parseInt((this.metrage/2.65).toString());
    let chutNB = this.metrage -nb2*2.65;
    let nb8 = 0;
    while(chutNB>0.2 && nb2>=1){
      nb8++;
      nb2 --;
      chutNB-=0.2;
    }
    if(Number(chutNB.toFixed(2)) == 0.2 && nb2>0){
        nb2--;nb8++;chutNB=chutNB-0.2;
        this.nb265 = nb2;
        this.nb285 = nb8;
        this.chut = Number(chutNB.toFixed(2));
        this.show = true;
    }else{
        this.nb265 = nb2;
        this.nb285 = nb8;
        this.chut = Number(chutNB.toFixed(2));
        this.show = true;
    }
  }
}
