import { Component } from '@angular/core';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import { NextPage } from '../next/next.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public nav:NavController,public popover: PopoverController,public modalController: ModalController) {}
  forward(){
    this.nav.navigateForward("/next");
  }

    async Pop(ev: any) {
      const popover = await this.popover.create({
        component: NextPage,
      
        event: ev,
        translucent: true
      });
      return await popover.present();
    }
    async Modal() {
      const modal = await this.modalController.create({
        component: NextPage,
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    }
  
  
}
