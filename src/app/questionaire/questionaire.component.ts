import { Component } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, UntypedFormBuilder} from "@angular/forms";
import {cutImageList, cycleImageList, realImageList} from "./constant";

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.scss']
})
export class QuestionaireComponent {
  randomCutImageNames: string[] = [];
  randomCycleImageNames: string[] = [];
  randomRealImageNames: string[] = [];

  questionnaireForm = this.fb.group({
    questions: this.fb.array([])
  });

  constructor(private fb: UntypedFormBuilder) {
    this.randomCutImageNames = this.getRandomImages(cutImageList, 30);
    this.randomCycleImageNames = this.getRandomImages(cycleImageList, 30);
    this.randomRealImageNames = this.getRandomImages(realImageList, 30);

    console.log('sizee', this.randomCutImageNames)
    this.addQuestions(30); // Create 30 questions
  }

  addQuestions(count: number) {
    for (let i = 0; i < count; i++) {
      let randomImageName = '';
      if (i < 10) {
        randomImageName = 'index-cut-pull\\' + this.randomCutImageNames[i];
      } else if (i < 20) {
        randomImageName = 'index-cycle-pull\\' + this.randomCycleImageNames[i];
      } else if (i < 30) {
        randomImageName = 'index-real-pull\\' + this.randomRealImageNames[i];
      }

      this.questions.push(this.fb.group({
        id: i + 1,
        mark: '',
        doctorId: '',
        tags: '',
        fileName: randomImageName,
        imageId: '',
        epoch: '',
        imageType: ''
      }));
    }
  }

  getRandomImages(images: string[], count: number): string[] {
    let shuffled = images
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

    return shuffled.slice(0, count);
  }

  get questions() {
    return this.questionnaireForm.get('questions') as FormArray;
  }

  onRate(item: AbstractControl<any>, rating: number) {
    console.log("itemm", item)
    item.setValue(rating);
  }

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  // onToppingRemoved(topping: string) {
  //   const toppings = this.questions.controls['tags'].value as string[];
  //   this.removeFirst(toppings, topping);
  //   this.questions.controls['tags'].setValue(toppings); // To trigger change detection
  // }

  tags: string[] = []; // Замените на актуальное имя свойства

  onToppingRemoved(topping: string) {
    const index = this.tags.indexOf(topping);
    if (index !== -1) {
      this.tags.splice(index, 1);
    }
    console.log("Выбранные элементы:", this.tags);
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}
