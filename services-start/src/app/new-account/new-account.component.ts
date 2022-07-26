import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService, AccountService]
})
export class NewAccountComponent {
  
  constructor(private loggingservice: LoggingService, private accountsService: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus);
    // this.loggingservice.logStatusChange(accountStatus);
   
  }
}
