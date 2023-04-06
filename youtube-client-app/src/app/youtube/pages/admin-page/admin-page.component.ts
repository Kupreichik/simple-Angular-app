import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, FormControl } from '@angular/forms';
import { urlPattern } from '../../constants/regexp-patterns.constant';
import { ValidateService } from '../../services/validate/validate.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  cardCreateForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private validateService: ValidateService) {}

  ngOnInit(): void {
    this.cardCreateForm = this.formBuilder.group({
      cardTitle: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      cardDescription: ['', [Validators.maxLength(255)]],
      cardImg: ['', [Validators.required, Validators.pattern(urlPattern)]],
      cardLink: ['', [Validators.required, Validators.pattern(urlPattern)]],
      cardDate: ['', [Validators.required, this.validateService.dateValidator]],
    });
  }

  get cardTitle() {
    return this.cardCreateForm.get('cardTitle');
  }

  get cardDescription() {
    return this.cardCreateForm.get('cardDescription');
  }

  get cardImg() {
    return this.cardCreateForm.get('cardImg');
  }

  get cardLink() {
    return this.cardCreateForm.get('cardLink');
  }

  get cardDate() {
    return this.cardCreateForm.get('cardDate');
  }
}
