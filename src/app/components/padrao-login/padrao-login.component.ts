import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-padrao-login',
  templateUrl: './padrao-login.component.html',
  styleUrls: ['./padrao-login.component.scss']
})
export class PadraoLoginComponent implements OnInit { 
  @Input() title: string = ''; 
  @Input() primaryBtnText: string = ''; 
  @Input() secondaryBtnText: string = ''; 

  constructor() {}

  ngOnInit(): void { 

  }
}
