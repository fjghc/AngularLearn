import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor-fb',
  templateUrl: './profile-editor-fb.component.html',
  styleUrls: ['./profile-editor-fb.component.css']
})
export class ProfileEditorFbComponent implements OnInit {


  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  // FromArry 匿名类型

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }


  ngOnInit() {
  }
  onSubmit(): void {
    console.warn(this.profileForm.value);
  }
}
