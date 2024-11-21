import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GlbViewerComponent } from '../../ThreeJS/glb-viewer/glb-viewer.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [FormsModule,GlbViewerComponent] // Adicione o FormsModule aqui
})
export class FormComponent {

  formData = {
    email: '',
    phone: '',
    address: '',
    service: '',
    detail: ''
  };

  onSubmit() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!emailPattern.test(this.formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!phonePattern.test(this.formData.phone)) {
      alert('Please enter a valid phone number.');
      return;
    }

    if (this.formData.address.trim() === '') {
      alert('Please enter your address.');
      return;
    }

    if (this.formData.service.trim() === '') {
      alert('Please enter the service.');
      return;
    }

    if (this.formData.detail.trim() === '') {
      alert('Please detail the service.');
      return;
    }

    alert('Form submitted successfully!');
  }
}
