import { Component, Input, OnInit } from '@angular/core';

import { Test2Service } from '../../_services/test2.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input() index: number = 0;
  @Input() title: string = '';
  @Input() owner: string = '';
  @Input() adress: string = '';
  @Input() price: string = '';
  @Input() picture: string = '';
  @Input() purchased: string = '';

  constructor(private testService: Test2Service) { }

  ngOnInit(): void {
  }
  public convertEtherToPrice(value:string):string{
    return this.testService.convertEtherToPrice(parseInt(value))
  }
}
