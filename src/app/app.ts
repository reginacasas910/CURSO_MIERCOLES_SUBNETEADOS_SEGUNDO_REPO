import { Component, signal } from '@angular/core';
import { ContainerComponent } from './components/container/container';
import { FloatingElements } from './components/floating-elements/floating-elements';
import { PassionSection } from "./components/passion-section/passion-section";
import { ProfileSection } from "./components/profile-section/profile-section";
import { CalculatorComponent } from "./components/calculator/calculator";


@Component({
  selector: 'app-root',
  imports: [ContainerComponent, FloatingElements, PassionSection, ProfileSection, CalculatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

