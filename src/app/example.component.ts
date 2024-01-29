import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
})
export class ExampleComponent {
  fechaDesdeString!: string;
  fechaHastaString!: string;
  isModalDateOpen = false;
  @ViewChild('modal') modalDate: IonModal;
  @ViewChild('datetime') dateTime: IonDatetime;

  closeDateModal() {
    this.dateTime.cancel();
    this.modalDate.dismiss();
  }
  confirmDateModal() {
    this.dateTime.confirm();
    this.modalDate.dismiss();
  }
}
