import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  location: string;
  loading = false;
  constructor(public router: Router, private storage: Storage) {
    this.location = 'london';

    this.storage.get('location').then((val) => {
      if (val !== null) {
        let location = JSON.parse(val);
        this.location = location;
      } else {
        this.location = 'london';
      }
    });
  }

  ngOnInit() {}

  submitLocation() {
    let location = this.location;

    this.storage.set('location', JSON.stringify(location));
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/' + 'tabs' + '/' + 'home']);
      this.loading = false;
    }, 2000);
  }
}
