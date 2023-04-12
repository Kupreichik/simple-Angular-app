import { Input, Component } from '@angular/core';
import { Statistics } from 'src/app/redux/state.models';

@Component({
  selector: 'app-item-statistics',
  templateUrl: './item-statistics.component.html',
  styleUrls: ['./item-statistics.component.scss'],
})
export class ItemStatisticsComponent {
  @Input() statistics!: Statistics;

  get viewCount(): string {
    return this.statistics?.viewCount;
  }

  get likeCount(): string {
    return this.statistics?.likeCount;
  }

  get commentCount(): string {
    return this.statistics?.commentCount;
  }
}
