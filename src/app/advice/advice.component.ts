import { Component, OnInit } from '@angular/core';
import { AdviceService } from './service/advice.service';
import { Slip } from './model/slip';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss'],
})
export class AdviceComponent implements OnInit {
  advice: Slip;

  constructor(private adviceService: AdviceService) {}

  ngOnInit(): void {
    this.adviceService.getAdvice().subscribe((response) => {
      this.advice = response.slip;
    });
  }
}
