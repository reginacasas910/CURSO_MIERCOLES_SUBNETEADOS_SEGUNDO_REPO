import { Component } from '@angular/core';
import { HeaderComponent } from '../daniel_header/daniel_header.component';
import { ButtonComponent } from '../daniel_button/daniel_button.component';
import { LoaderComponent } from '../daniel_loader/daniel_loader.component';

@Component({
  selector: 'app-daniel',
  imports: [HeaderComponent,ButtonComponent,LoaderComponent],
  templateUrl: './daniel.html',
  styleUrl: './daniel.css',
})
export class Daniel {

}
