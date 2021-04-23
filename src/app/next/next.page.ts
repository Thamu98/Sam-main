import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-next',
  templateUrl: './next.page.html',
  styleUrls: ['./next.page.scss'],
})
export class NextPage implements OnInit {
  

  constructor(public actionSheetController:ActionSheetController,
    public toast:ToastController,public alertController: AlertController) { }
  ngOnInit(): void {
  }
  
  async action() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
     
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',},

      {
        text: 'Share',
        icon: 'share',
      },

      {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
      },

     {
        text: 'Favorite',
        icon: 'heart',
      },

      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
     
      }]
    });
    await actionSheet.present();
  }
  async Alert() {
    const alert = await this.alertController.create({
     
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
 
 
    async fun() {
      const toast = await this.toast.create({
        message: 'Your settings have been saved.',
        duration: 2000
      });
      toast.present();
    }
  
    async presentToastWithOptions() {
      const toast = await this.toast.create({
        header: 'Toast header',
        message: 'Click to Close',
        position: 'top',
        buttons: [
          {
            side: 'start',
            icon: 'star',
            text: 'Favorite',
           
          }, {
            text: 'Done',
            role: 'cancel',
           
          }
        ]
      });
      toast.present();
    }
  
  }
  



