/*
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {get} from "http";
import { Injectable } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../../hero.service';
import {Observable, of} from "rxjs";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.html',
  styleUrls: ['./question-form.scss']
})
export class QuestionFormComponent implements OnInit {
  private questionForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.initializeQuestionForm();
    private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location
  }

  private initializeQuestionForm() {
    this.questionForm = this.formBuilder.group({
      label: [''],
      answers: this.formBuilder.array([])
    })
  }

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer() {
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    })
  }

  addAnswer() {
    this.answers.push(this.createAnswer());
  }

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.quizService.getQuiz(id)
      .subscribe(quiz => this.quiz = quiz);
  }
  getQuiz(id: number): Observable<Quiz> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const quiz = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(quiz);
  }

  goBack(): void {
    this.location.back();
  }
}

 */
