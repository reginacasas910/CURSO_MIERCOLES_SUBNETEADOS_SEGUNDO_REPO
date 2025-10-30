import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../../services/button.service';

@Component({
  selector: 'app-button',
  templateUrl: './daniel_button.component.html',
  styleUrls: ['./daniel_button.component.scss'],
  standalone: true
})
export class ButtonComponent implements OnInit {
  count: number = 0;

  constructor(private buttonService: ButtonService) {}

  ngOnInit(): void {
    this.buttonService.count$.subscribe(value => this.count = value);
  }

  onClick() {
    this.buttonService.increment();
  }
}
