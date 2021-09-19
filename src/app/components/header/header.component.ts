import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';


  constructor() {
    // Runs whenever an object is initialized

  }

  ngOnInit(): void {
    //life cycle method
  }
  toggleAddTask() {
    console.log('TOGGLE')
  }
}
