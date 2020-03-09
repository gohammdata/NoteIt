import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NOTES } from '../mock-notes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  notes = NOTES;
  selectedNote: Note;

  constructor() { }

  ngOnInit() {
  }
  onSelect(note: Note): void{
    this.selectedNote = note;
  }

}
