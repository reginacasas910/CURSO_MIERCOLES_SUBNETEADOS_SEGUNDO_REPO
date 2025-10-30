import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './daniel_loader.component.html',
  styleUrls: ['./daniel_loader.component.scss'],
  standalone: true,
  imports: [NgIf] // <-- aquí
})
export class LoaderComponent {
  @Input() show: boolean = false;
}
