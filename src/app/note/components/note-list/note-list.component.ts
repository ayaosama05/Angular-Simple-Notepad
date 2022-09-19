import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/models/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  @Input() notes: Note[] = [];
  @Output() deletedNoteNum: EventEmitter<number> = new EventEmitter();
  @Output() note: EventEmitter<Note> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteThisNote(num: any) {
    this.deletedNoteNum.emit(num);
  }

  editThisNote(item: any) {
    this.note.emit(item);
  }
}
