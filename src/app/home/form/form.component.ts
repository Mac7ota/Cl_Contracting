import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GlbViewerComponent } from '../../ThreeJS/glb-viewer/glb-viewer.component';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule, GlbViewerComponent]
})
export class FormComponent implements OnInit, OnDestroy {
  isImg: boolean = false;
  is3DHouse: boolean = true;

  formData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    service: ''
  };

  private isBrowser: boolean;

  constructor() {
    this.isBrowser = typeof window !== 'undefined';
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkWindowSize();
      window.addEventListener('resize', this.checkWindowSize);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      window.removeEventListener('resize', this.checkWindowSize);
    }
  }

  checkWindowSize = () => {
    if (this.isBrowser && window.innerWidth <= 750) {
      this.isImg = true;
      this.is3DHouse = false;
    }
  };

  onSubmit(event: Event) {
    event.preventDefault(); // Previne o comportamento padrão de submissão do formulário

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;

    if (this.formData.name.trim() === '') {
      alert('Please enter your name.');
      return;
    }

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

    this.sendEmail(event);
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    const templateParams = {
      to_name: this.formData.name,
      from_name: this.formData.email,
      message: `Phone: ${this.formData.phone}\nAddress: ${this.formData.address}\nService: ${this.formData.service}`
    };

    emailjs.send('service_2fe41s6', 'template_ops2zhd', templateParams, 'NLp8B7MBBxfBdH-bU')
      .then((result: EmailJSResponseStatus) => {
        alert('Form submitted successfully!');
        console.log(result.text);
      }, (error) => {
        alert('An error occurred, Please try again');
        console.log(error.text);
      });
  }


  formatPhoneNumber(event: any) {
    let input = event.target.value.replace(/\D/g, '');
    if (input.length > 10) {
      input = input.substring(0, 10);
    }
    const areaCode = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) {
      event.target.value = `(${areaCode}) ${middle}-${last}`;
    } else if (input.length > 3) {
      event.target.value = `(${areaCode}) ${middle}`;
    } else if (input.length > 0) {
      event.target.value = `(${areaCode}`;
    }
    this.formData.phone = event.target.value;
  }
}
