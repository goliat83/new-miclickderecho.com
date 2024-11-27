import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponent {

  title = 'Home Component';

  constructor(private titleService:Title) {}

  ngOnInit() {
    console.log('HomeComponent');
    this.titleService.setTitle(this.title);

  }

}
