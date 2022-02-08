import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
// @ts-ignore
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
// @ts-ignore
import { UserListComponent } from './users/user-list/user-list.component';
import {EditQuizComponent} from "./quizzes/edit-quiz/edit-quiz-component";
import {QuizListComponent} from "./quizzes/quiz-list/quiz-list.component";

const routes: Routes = [
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'edit-quiz', component: EditQuizComponent},
  {path: '**', component: QuizListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
