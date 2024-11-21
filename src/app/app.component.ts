import { Component } from '@angular/core';
import { NavigationComponent } from "./home/navigation/navigation.component";
import { HomeSectionComponent } from "./home/home-section/home-section.component";
import { CarouselComponent } from './home/carousel/carousel.component';
import { FormComponent } from "./home/form/form.component";
import { FooterComponent } from "./home/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, HomeSectionComponent, CarouselComponent, FormComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cl-contracting';
}
