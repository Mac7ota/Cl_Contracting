import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-service',
  templateUrl: './info-service.component.html',
  styleUrls: ['./info-service.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class InfoServiceComponent {
  title: string = '';
  description: string = '';

  isVisible1: boolean = false;
  isVisible2: boolean = false;
  isVisible3: boolean = false;
  isVisible4: boolean = false;
  isVisible5: boolean = false;
  isVisible6: boolean = false;
  isVisible7: boolean = false;


  alterInfo(select: number) {
    switch (select) {
      case 1:
        this.ordemVisible(1);
        this.title = "Custom Cabinets: Tailored Solutions for Your Home's Storage Needs";
        this.description = "Transform your living space with our custom cabinet services. We design and craft high-quality, personalized cabinets that enhance both the aesthetic and functionality of any room. Whether you're looking for kitchen cabinets, bathroom vanities, or storage solutions for your living room, we ensure that every detail is meticulously planned and expertly executed. Our cabinets are built to last, using durable materials and advanced techniques to match your unique style and storage requirements.";
        break;
      case 2:
        this.ordemVisible(2);
        this.title = "Elegant Decks: Build Your Outdoor Oasis";
        this.description = "Elevate your outdoor living experience with our stunning deck designs and installations. From cozy retreats to expansive entertaining spaces, we specialize in crafting beautiful, functional decks that complement your home and lifestyle. Our team works closely with you to select the perfect materials, whether it's wood, composite, or PVC, and we ensure your deck is built to withstand the elements while adding value to your property. Enjoy summer days, barbecues, and outdoor gatherings on a deck that truly reflects your style.";
        break;
      case 3:
        this.ordemVisible(3);
        this.title = "Professional Painting: Revitalize Your Space with a Fresh Coat";
        this.description = "A fresh coat of paint can completely transform the look and feel of your home. Our expert painting services cover everything from interior rooms to exterior facades, delivering flawless finishes with attention to detail. We work with high-quality paints and materials to ensure vibrant, lasting results. Whether you're refreshing a single room or giving your entire home a new look, our professional painters deliver exceptional service, creating a clean, polished finish that enhances your home's beauty and charm.";
        break;
      case 4:
        this.ordemVisible(4);
        this.title = "Durable Sidings: Protect and Beautify Your Home’s Exterior";
        this.description = "Give your home a timeless, protective upgrade with our premium siding installation services. Our team offers a wide range of siding options, including vinyl, wood, fiber cement, and more, each designed to provide durability, insulation, and curb appeal. With expert installation, your new siding will protect your home from the elements while enhancing its exterior beauty. Whether you're replacing outdated siding or adding a new look to your home, we deliver results that improve both function and style.";
        break;
      case 5:
        this.ordemVisible(5);
        this.title = "Custom Stairs: Craftsmanship That Elevates Your Home";
        this.description = "Our custom stair solutions bring both functionality and elegance to your home. We design and build stairs that suit your style and space, offering a wide range of materials including wood, metal, and glass. Whether you need a grand staircase for a spacious foyer or a sleek, modern design for a compact area, our team ensures every step is crafted with precision and care. Stairs are not just functional – they are a central feature of your home, and we make sure they make a statement.";
        break;
      case 6:
        this.ordemVisible(6);
        this.title = "Windows & Doors: Enhance Your Home’s Curb Appeal and Efficiency";
        this.description = "Our window and door installation services bring both style and energy efficiency to your home. We offer a variety of beautiful, durable windows and doors to suit every architectural style, from classic wood frames to modern, energy-efficient designs. With our expert installation, your new windows and doors will improve your home’s insulation, reduce energy bills, and increase its value. Whether you're replacing outdated windows, adding a statement door, or upgrading to more energy-efficient options, we deliver quality craftsmanship and exceptional results.";
        break;
      case 7:
        this.ordemVisible(7);
        this.title = "Roofing Solutions: Elevate Your Home's Protection and Aesthetic Appeal";
        this.description = "Our roofing replacement services provide a blend of durability, style, and energy efficiency to your home. We offer a wide range of high-quality roofing materials to complement every architectural style, from traditional shingles to contemporary metal roofs. With our professional installation, your new roof will enhance your home's insulation, lower energy costs, and boost its market value. Whether you're replacing an old, worn-out roof, adding a new look to your home, or upgrading to more energy-efficient roofing options, we guarantee superior craftsmanship and outstanding results.";
        break;
      default:
        this.title = 'Title';
        this.description = 'Description';
        break;
    }
  }

  ordemVisible(select: number) {
    switch (select) {
      case 1:
        this.isVisible1 = true;
        this.isVisible2 = false;
        this.isVisible3 = false;
        this.isVisible4 = false;
        this.isVisible5 = false;
        this.isVisible6 = false;
        this.isVisible7 = false;
        break;
      case 2:
        this.isVisible1 = false;
        this.isVisible2 = true;
        this.isVisible3 = false;
        this.isVisible4 = false;
        this.isVisible5 = false;
        this.isVisible6 = false;
        this.isVisible7 = false;
        break;
      case 3:
        this.isVisible1 = false;
        this.isVisible2 = false;
        this.isVisible3 = true;
        this.isVisible4 = false;
        this.isVisible5 = false;
        this.isVisible6 = false;
        this.isVisible7 = false;
        break;
      case 4:
        this.isVisible1 = false;
        this.isVisible2 = false;
        this.isVisible3 = false;
        this.isVisible4 = true;
        this.isVisible5 = false;
        this.isVisible6 = false;
        this.isVisible7 = false;
        break;
      case 5:
        this.isVisible1 = false;
        this.isVisible2 = false;
        this.isVisible3 = false;
        this.isVisible4 = false;
        this.isVisible5 = true;
        this.isVisible6 = false;
        this.isVisible7 = false;
        break;
      case 6:
        this.isVisible1 = false;
        this.isVisible2 = false;
        this.isVisible3 = false;
        this.isVisible4 = false;
        this.isVisible5 = false;
        this.isVisible6 = true;
        this.isVisible7 = false;
        break;
      case 7:
        this.isVisible1 = false;
        this.isVisible2 = false;
        this.isVisible3 = false;
        this.isVisible4 = false;
        this.isVisible5 = false;
        this.isVisible6 = false;
        this.isVisible7 = true;
        break;
      default:
        this.isVisible1 = false;
        this.isVisible2 = false;
        this.isVisible3 = false;
        this.isVisible4 = false;
        this.isVisible5 = false;
        this.isVisible6 = false;
        this.isVisible7 = false;
        break;
    }

  }

}
