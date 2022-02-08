import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';


@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz-component.html',
  styleUrls: ['./edit-quiz-component.scss']
})
export class EditQuizComponent implements OnInit {

  @Input()
  quiz: Quiz | undefined;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  quizDelete: EventEmitter<Quiz> = new EventEmitter<Quiz>()

  @Output()
  quizEdit: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor() {
  }

  ngOnInit() {
  }

  selectQuiz() {
    this.quizSelected.emit(true);
  }

  deleteQuiz(quiz : Quiz) {
    this.quizDelete.emit(quiz);
  }

  editQuiz(quiz : Quiz) {
    this.quizEdit.emit(quiz);
  }
}
