import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoteRoutingModule } from './note-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteAddComponent } from './components/note-add/note-add.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { NotePageComponent } from './components/note-page/note-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
@NgModule({
  declarations: [
    NoteListComponent,
    NoteAddComponent,
    NoteDetailsComponent,
    NotePageComponent,
    NoteEditComponent,
    NoteFormComponent,
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
})
export class NoteModule {}
