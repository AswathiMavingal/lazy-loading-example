import { Component, ViewChild } from '@angular/core';
import { AddEditGoodiesComponent } from './add-edit-goodies/add-edit-goodies.component';

@Component({
  selector: 'app-goodies',
  templateUrl: './goodies.component.html',
  styleUrls: ['./goodies.component.css'],
})
export class GoodiesComponent {
  @ViewChild('add')
  modal: AddEditGoodiesComponent;

  openModal() {
    this.modal.openModal();
  }
}
