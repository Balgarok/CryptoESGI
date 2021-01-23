import { Component, OnInit } from '@angular/core';
import { Test2Service } from '../../_services/test2.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 accountCurrent: any = null;
  constructor(private testService: Test2Service) {
    this.testService.checkAndInstantiateWeb3()
    .then((checkConn: any) => {
      if (checkConn === 'connected') {
        this.testService.loadBlockChainData()
          .then((accountData: any) => {
            this.accountCurrent = accountData[0];
          });
        };
      })
  }

  ngOnInit(): void {
  }
  public getCurrentAccount(): any{
    return this.accountCurrent
  }
  log(){
    this.testService.loggin(this.accountCurrent)
  }
}
