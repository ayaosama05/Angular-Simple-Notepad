import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/helpers/MyErrorStateMatcher';
import { Note } from 'src/models/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent implements OnInit, OnChanges {
  @Input() note: Note = new Note('', '');
  @Output() targetNote: EventEmitter<Note> = new EventEmitter();

  registerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(),
  });
  submitted = false;
  matcher = new MyErrorStateMatcher();
  _note = new Note('', '');
  subscription = new Subscription();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.SetRegisterForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['note'].currentValue);
    this.registerForm = this.SetRegisterForm();
  }

  submitNote() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this._note = this.GetRegisterForm();
    this.targetNote.emit(this._note);
    this.Reset();
  }

  SetRegisterForm() {
    return this.formBuilder.group({
      title: [this.note.title, [Validators.required, Validators.minLength(5)]],
      description: [this.note.description, [Validators.required]],
    });
  }

  GetRegisterForm(): Note {
    return {
      title: this.registerForm.get('title')?.value,
      description: this.registerForm.get('description')?.value,
      id: this.note.id,
      date: this.note.date,
    };
  }

  Reset() {
    this.registerForm.reset();
    this.submitted = false;
    this.note = new Note('', '');
  }
}
