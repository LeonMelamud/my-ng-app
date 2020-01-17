import { LogService } from './../log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.css']
})
export class LogTestComponent {

  logger: LogService;

  constructor(logService: LogService) {
    this.logger = logService;

  }
  ngOnInit() {
  }
  private testLogButton() {
    this.logger.info("testLog", 6, [445, 456], { "5": "5" }, []);
  }
}
