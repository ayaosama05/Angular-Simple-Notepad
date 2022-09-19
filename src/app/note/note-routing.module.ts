import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotePageComponent } from './components/note-page/note-page.component';

const routes: Routes = [{ path: '', component: NotePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteRoutingModule {}
