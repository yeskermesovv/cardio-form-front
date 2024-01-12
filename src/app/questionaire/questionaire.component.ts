import {Component} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, UntypedFormBuilder} from "@angular/forms";
import {cutImageList, cycleImageList, realImageList} from "./constant";
import {CardioService} from "../../service/cardio.service";

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.scss']
})
export class QuestionaireComponent {
  randomCutImageNames: string[] = [];
  randomCycleImageNames: string[] = [];
  randomRealImageNames: string[] = [];
  imageTags: Tag[] = [];

  questionnaireForm = this.fb.group({
    questions: this.fb.array([])
  });

  constructor(private fb: UntypedFormBuilder,
              private cardioService: CardioService) {
    this.randomCutImageNames = this.getRandomImages(cutImageList, 30);
    this.randomCycleImageNames = this.getRandomImages(cycleImageList, 30);
    this.randomRealImageNames = this.getRandomImages(realImageList, 30);

    console.log('sizee', this.randomCutImageNames)
    this.addQuestions(30); // Create 30 questions
  }

  addQuestions(count: number) {
    for (let i = 0; i < count; i++) {
      let randomImageName = '';
      let doctorId = JSON.parse(localStorage.getItem("user")).id;
      let imageId = '';
      let imageType = '';
      let epoch = '';

      if (i < 10) {
        randomImageName = 'index-cut-pull\\' + this.randomCutImageNames[i];
        imageId = this.randomCutImageNames[i].substring(0, 3);
        imageType = 'cut'
        epoch = this.getEpoch(this.randomCutImageNames[i]);
      } else if (i < 20) {
        randomImageName = 'index-cycle-pull\\' + this.randomCycleImageNames[i];
        imageId = this.randomCycleImageNames[i].substring(0, 3);
        imageType = 'cycle'
        epoch = this.getEpoch(this.randomCycleImageNames[i]);
      } else if (i < 30) {
        randomImageName = 'index-real-pull\\' + this.randomRealImageNames[i];
        imageId = this.randomRealImageNames[i].substring(0, 3);
        imageType = 'real'
      }


      this.questions.push(this.fb.group({
        mark: '',
        doctorId: doctorId,
        tags: new FormControl([]),
        fileName: randomImageName,
        imageId: imageId,
        epoch: epoch,
        imageType: imageType
      }));
    }
  }

  getRandomImages(images: string[], count: number): string[] {
    let shuffled = images
      .map(value => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value)

    return shuffled.slice(0, count);
  }

  get questions() {
    return this.questionnaireForm.get('questions') as FormArray;
  }

  onRate(item: AbstractControl<any>, rating: number) {
    console.log("itemm", item)
    item.setValue(rating);
  }

  getEpoch(fileName): string {
    let parts = fileName.split('_'); // Split the string by underscores
    let lastPart = parts[parts.length - 1]; // Get the last part of the split string
    return lastPart.split('.')[0]; // Split by '.' and take the first part to remove '.jpg'
  }

  onSubmit() {
    this.cardioService.saveForm(this.questionnaireForm.value).subscribe(res => {
      console.log('res', res)
    });
    console.log('formValuee', this.questionnaireForm.value)
  }
}

interface Tag {
  id: number,
  name: string
}
