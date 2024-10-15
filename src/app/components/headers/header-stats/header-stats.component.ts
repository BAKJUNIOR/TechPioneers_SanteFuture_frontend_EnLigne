import { Component } from '@angular/core';
import { CardStatsComponent } from '../../cards/card-stats/card-stats.component';
import { CardTableStatsComponent } from '../../cards/card-table-stats/card-table-stats.component';
import { CardTableBarsComponent } from '../../cards/card-table-bars/card-table-bars.component';

@Component({
  selector: 'app-header-stats',
  standalone: true,
  imports: [CardStatsComponent, CardTableStatsComponent, CardTableBarsComponent],
  templateUrl: './header-stats.component.html',
})
export class HeaderStatsComponent {
  
}
