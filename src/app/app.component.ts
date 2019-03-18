import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'za-podruga';
  verify = false;

  question = 'Može li žaba skočiti više od kuće?';
  answers = [
    {
      value: 'Da',
      valid: true
    }, {
      value: 'Ne',
      valid: false
    }, {
      value: 'Pojma nemam',
      valid: false
    }
  ];

  mySelection = [];
  validAnswers = [];
  invalidAnswers = [];

  addToSelection(index) {
    if (!this.mySelection.includes(index)) {
      this.mySelection.push(index);
    } else {
      this.mySelection = this.mySelection.filter(selection => selection !== index);
    }
  }

  toggleVerification() {
    this.clearValidAndInvalid();
    if (!this.verify) {
      this.calculateCorrectAnswers();
    }
    this.verify = !this.verify;
  }

  clearValidAndInvalid() {
    this.validAnswers = [];
    this.invalidAnswers = [];
  }

  calculateCorrectAnswers() {
    this.answers.forEach((question, index) => {
      if (!this.mySelection.includes(index)) {
        return;
      } else if (question.valid) {
        this.validAnswers.push(index);
      } else if (!question.valid) {
        this.invalidAnswers.push(index);
      }
    });
  }
}
