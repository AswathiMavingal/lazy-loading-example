// import { Component, ElementRef, Renderer2 } from '@angular/core';

// @Component({
//   selector: 'app-add-edit-goodies',
//   templateUrl: './add-edit-goodies.component.html',
//   styleUrls: ['./add-edit-goodies.component.css'],
// })
// export class AddEditGoodiesComponent {
//   constructor(private el: ElementRef, private renderer: Renderer2) {}
//   show() {
//     debugger;
//     this.renderer.addClass(this.el.nativeElement, 'show');
//   }

//   hide() {
//     this.renderer.removeClass(this.el.nativeElement, 'show');
//   }
// }

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-edit-goodies',
  templateUrl: './add-edit-goodies.component.html',
  styleUrls: ['./add-edit-goodies.component.css'],
})
export class AddEditGoodiesComponent {
  @ViewChild('myModal') modal: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.modal.nativeElement.style.display = 'none';
  }
}
