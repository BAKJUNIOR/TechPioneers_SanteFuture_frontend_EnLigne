import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-card-table-stats',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './card-table-stats.component.html',
})
export class CardTableStatsComponent {
  @ViewChild(BaseChartDirective) chart:
    | BaseChartDirective<'doughnut'>
    | undefined;

  public barChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType = 'doughnut' as const;

  public barChartData: ChartData<'doughnut'> = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Santé Future',
        data: [30, 50, 10],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        // hoverOffset: 4,
      },
    ],
  };

  // events
}
