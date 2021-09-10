/**
 * @Aayush Khanna
 * Trainee Technology
 *
 * This file contains components of angular/core
 */
import { Component } from '@angular/core';

@Component({
  //selector
  selector: 'app-root',
  //html file url
  templateUrl: './app.component.html',
  //css style files
  styleUrls: ['./app.component.css']
})
//exporting class
export class AppComponent {
  title = 'my-app';
}
