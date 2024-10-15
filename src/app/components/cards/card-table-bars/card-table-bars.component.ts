import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-card-table-bars',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './card-table-bars.component.html',
  styleUrl: './card-table-bars.component.css'
})
export class CardTableBarsComponent {
  @ViewChild(BaseChartDirective) chart:
  | BaseChartDirective<'bar'>
  | undefined;

public barChartOptions: ChartConfiguration<'bar'>['options'] = {
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
public barChartType = 'bar' as const;

public barChartData: ChartData<'bar'> = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
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
public chartClicked({
  event,
  active,
}: {
  event?: ChartEvent;
  active?: object[];
}): void {
  console.log(event, active);
}

public chartHovered({
  event,
  active,
}: {
  event?: ChartEvent;
  active?: object[];
}): void {
  console.log(event, active);
}

public randomize(): void {
  // Only Change 3 values
  this.barChartData.datasets[0].data = [
    Math.round(Math.random() * 100),
    59,
    80,
    Math.round(Math.random() * 100),
    56,
    Math.round(Math.random() * 100),
    40,
  ];

  this.chart?.update();
}
}
