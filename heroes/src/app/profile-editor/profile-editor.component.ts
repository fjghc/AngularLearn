import { Component, OnInit } from '@angular/core';
/* 引入表达验证 Validators */
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    /* 添加表单验证Validators */
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    /* 添加FormArray */
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  /* 通过属性获取aliases */
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }


  /* 使用FromBuilder构建表单 */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
  /* 部分更新属性 */
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Dddd Street'
      }
    });
  }
}
