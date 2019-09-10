import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to maya';
  points = 1;
Plus1()
{
  this.points++;
}
reset()
{
this.points = 0;
}
}
