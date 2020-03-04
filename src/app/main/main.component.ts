import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  note: Note = {
    id: 1,
    name: 'First Note'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
