import { Component, OnInit } from '@angular/core';
import { AdviceService } from './service/advice.service';
import { Slip } from './model/slip';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss'],
})
export class AdviceComponent implements OnInit {
  advice: Slip | null;

  constructor(private adviceService: AdviceService) {}

  handleClick(): void {
    this.adviceService.getAdvice().subscribe((response) => {
      this.advice = response.slip;
    });
  }

  ngOnInit(): void {
    this.adviceService.getAdvice().subscribe((response) => {
      this.advice = response.slip;
    });
  }
}
