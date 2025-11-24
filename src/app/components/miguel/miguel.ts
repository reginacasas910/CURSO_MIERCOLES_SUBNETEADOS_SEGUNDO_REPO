import { Component } from '@angular/core';
import { CalculatorComponent } from '../miguel_calculator/miguel_calculator';
import { ContainerComponent } from '../miguel_container/miguel_container';
import { FloatingElements } from '../miguel_floating-elements/miguel_floating-elements';
import { PassionSection } from '../miguel_passion-section/miguel_passion-section';
import { ProfileSection } from '../miguel_profile-section/miguel_profile-section';

@Component({
  selector: 'app-miguel',
  imports: [CalculatorComponent,ContainerComponent,FloatingElements,PassionSection,ProfileSection],
  templateUrl: './miguel.html',
  styleUrl: './miguel.css',
})
export class Miguel {

}
