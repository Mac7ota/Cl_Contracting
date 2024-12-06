import { InfoServiceComponent } from './home/info-service/info-service.component';
import { Component } from '@angular/core';
import { NavigationComponent } from "./home/navigation/navigation.component";
import { HomeSectionComponent } from "./home/home-section/home-section.component";
import { CarouselComponent } from './home/carousel/carousel.component';
import { FormComponent } from "./home/form/form.component";
import { FooterComponent } from "./home/footer/footer.component";
import { MapComponent } from './home/map/map.component';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, HomeSectionComponent, CarouselComponent, FormComponent, FooterComponent, InfoServiceComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cl-contracting';
}
