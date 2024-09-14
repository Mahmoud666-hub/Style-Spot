import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isInputVisible = false; // حالة عرض حقل الإدخال

  toggleInput() {
    this.isInputVisible = !this.isInputVisible; // تبديل حالة العرض
  }

  handleButtonClick() {
    alert('Button clicked!');
  }
}
