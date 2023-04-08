import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { urlPattern } from '../../constants/regexp-patterns.constant';
import { ValidateService } from '../../../core/services/validate/validate.service';

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

  cardTitleError(error: string): ValidationErrors | null | undefined {
    return this.cardTitle?.errors?.[error];
  }

  cardDescriptionError(error: string): ValidationErrors | null | undefined {
    return this.cardDescription?.errors?.[error];
  }

  cardImgError(error: string): ValidationErrors | null | undefined {
    return this.cardImg?.errors?.[error];
  }

  cardLinkError(error: string): ValidationErrors | null | undefined {
    return this.cardLink?.errors?.[error];
  }

  cardDateError(error: string): ValidationErrors | null | undefined {
    return this.cardDate?.errors?.[error];
  }
}
