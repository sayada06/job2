import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private NavCtrl:NavController) { }

  ngOnInit() {
  }

}
