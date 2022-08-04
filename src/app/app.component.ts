import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') submitForm: NgForm;
  answer: string;
  defaultQuestion = 'pet';

  genders = ['male','female'];

  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  }

  submitted = false;

  suggestUserName(){
    const suggestedName = 'Superuser';
    // this.submitForm.setValue(
    //   {
    //     username: suggestedName,
    //     email: ''
    //   }
    // );
    this.submitForm.form.patchValue(
      {
        username: suggestedName
      }
    );
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.submitForm.value.username;
    this.user.email = this.submitForm.value.email;
    this.user.gender = this.submitForm.value.gender;
    this.user.secret = this.submitForm.value.secret;
    this.user.answer = this.submitForm.value.questionAnswer;

    this.submitForm.reset();
  }

}
