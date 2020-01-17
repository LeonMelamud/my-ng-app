import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private logger: LogService) { }

  public getLogger() {
    this.logger.debug('getting email ....');
  }
}
