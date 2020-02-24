import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private amount: string;
  private from: string;
  private to: string;
  private body: any;

  constructor(public navCtrl: NavController,public alerCtrl: AlertController,  private http: Http) {

  }

  convertClick(event) {

    this.soapCall();
  }

  soapCall() {

    this.http.post('http://marvel.somee.com/restservice/ConvertCurrency',{
      Amount: parseFloat(this.amount),
      FromCurrency: this.from,
      ToCurrency: this.to},{}).map(res => res.json()).subscribe(data => {
        this.body = data; 
        let alert = this.alerCtrl.create({
          title: 'Amount',
          message: this.body.Amount,
          buttons: ['Ok']
        });
        alert.present();
        });
  }

}

