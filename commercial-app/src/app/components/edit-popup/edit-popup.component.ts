import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { Product } from '../../../types';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [
    DialogModule,
    RatingModule,
    CommonModule,
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss',
})
export class EditPopupComponent {
  constructor(private formBuilder: FormBuilder) {}

  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter();

  @Input() header!: string;
  @Input() product: Product = {
    name: '',
    image: '',
    price: '',
    rating: 0,
  };

  @Output() confirm = new EventEmitter<Product>(); // emit the input values to outside

  onConfirm() {
    this.confirm.emit(this.product);
    // update the display (input) so need two-way binding
    this.display = false;
    this.displayChange.emit(this.display);
  }

  onCancel() {
    // update the display (input) so need two-way binding
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
