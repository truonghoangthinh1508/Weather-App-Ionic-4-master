import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

import { WeatherProvider } from '../../providers/weather';
import { NavParamsService } from '../../providers/navParamsService';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    private cityList: Array<any>;
    private query: string;
    constructor(
        private weatherApi: WeatherProvider,
        private loadingCtrl: LoadingController,
        private navCtrl: NavController,
        private navParamsSrv: NavParamsService
    ) {
        this.query = '';
    }

    search(event) {
        this.query = event.detail.value;
        this.cityList = this.weatherApi.search(this.query);
    }
    goToDetails(city){
        this.presentLoading();
        this.weatherApi.query('forecast', {id: city.id, units: 'metric'})
        .subscribe(async cityDetails => {
            this.navParamsSrv.set('detail', cityDetails);
            await this.loadingCtrl.dismiss();
            await this.navCtrl.goForward('/detail')
        })
    }
    async presentLoading() {
        const loading = await this.loadingCtrl.create({
            content: 'Please wait...',
            translucent: true,
            cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
    }
}
