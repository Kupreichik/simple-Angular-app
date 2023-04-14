import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { nanoid } from 'nanoid';
import { urlPattern } from '../../constants/regexp-patterns.constant';
import { ValidateService } from '../../../core/services/validate/validate.service';
import { idLength } from '../../constants/response.constant';
import { SearchItem } from 'src/app/redux/state.models';
import { Store } from '@ngrx/store';
import { createCustomItem } from 'src/app/redux/actions/custom-items.actions';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  cardCreateForm!: FormGroup;
  isPopupVisible = false;

  constructor(
    private formBuilder: FormBuilder,
    private validateService: ValidateService,
    private store: Store
    ) {}

  ngOnInit(): void {
    this.cardCreateForm = this.formBuilder.group({
      cardTitle: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      cardDescription: ['', [Validators.maxLength(255)]],
      cardImg: ['', [Validators.required, Validators.pattern(urlPattern)]],
      cardLink: ['', [Validators.required, Validators.pattern(urlPattern)]],
      cardDate: ['', [Validators.required, this.validateService.dateValidator]],
    });
  }

  submitCard() {
    const { cardTitle, cardDescription, cardImg, cardLink, cardDate } = this.cardCreateForm.value;
    const id = nanoid(idLength);

    const card: SearchItem<string> = {
      videoLink: cardLink,
      id,
      snippet: {
        publishedAt: cardDate,
        title: cardTitle,
        description: cardDescription,
        thumbnails: {
          medium: { url: cardImg },
          standard: { url: cardImg },
        },
      },
      statistics: {
        viewCount: '1',
        likeCount: '0',
        commentCount: '0',
      },
    };

    this.store.dispatch(createCustomItem(card));
    this.resetForm();
    this.showPopup();
  }

  private resetForm() {
    const formFieldsLinks: AbstractControl[] = [
      this.cardTitle,
      this.cardDescription,
      this.cardImg,
      this.cardLink,
      this.cardDate,
    ];
    formFieldsLinks.forEach((item) => {
      item.reset()
    })
  }

  showPopup() {
    const delay = 1000;
    this.isPopupVisible = true;
    setTimeout(() => this.isPopupVisible = false, delay)
  }

  get cardTitle() {
    return this.cardCreateForm.get('cardTitle') as AbstractControl;
  }

  get cardDescription() {
    return this.cardCreateForm.get('cardDescription') as AbstractControl;
  }

  get cardImg() {
    return this.cardCreateForm.get('cardImg') as AbstractControl;
  }

  get cardLink() {
    return this.cardCreateForm.get('cardLink') as AbstractControl;
  }

  get cardDate() {
    return this.cardCreateForm.get('cardDate') as AbstractControl;
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
