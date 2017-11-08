import { Component } from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {NavController} from "ionic-angular";
import {InfoPage} from "../info/info";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lists:any;

  //dataService can be named anything
  constructor(public navCtrl:NavController, public dataService:DataProvider) {

  }

  ionViewDidLoad (){
    this.lists = this.dataService.lists;
  }

  itemClicked(item):void {
    console.log(item);
    this.navCtrl.push(InfoPage, item);
  }

}
