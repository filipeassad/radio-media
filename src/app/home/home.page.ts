import { Component } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	my_media: MediaObject;

	constructor(private media: Media) { }

	ligarSom() {
        this.my_media = this.media.create('http://stream.asaweb.com.br:8032/stream');
        //this.my_media = this.media.create('http://us4.internet-radio.com:8266/listen.pls&t=.m3u');
        //this.my_media = this.media.create('http://78.129.187.57:21480/listen.pls&t=.m3u');

        console.log("Ligou o som! ta escutando?");
		this.my_media.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
		this.my_media.onSuccess.subscribe(() => console.log('Action is successful'));
		this.my_media.onError.subscribe(error => console.log('Error!', error));

		this.my_media.play({ playAudioWhenScreenIsLocked: true });							
	}

	pararSom() {
		this.my_media.stop();
	}

}