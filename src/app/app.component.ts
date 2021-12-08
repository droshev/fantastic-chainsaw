import { Component, OnInit } from '@angular/core';

import { WizardGeneratorItem } from '@fundamental-ngx/platform/wizard-generator';

import { WizardDataService } from './wizard-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  stepItems: WizardGeneratorItem[] = [];

  constructor(private wizardService: WizardDataService) {}
  
  ngOnInit(): void {
    this.getWizardData();
  }

  getWizardData(){
   this.stepItems = this.wizardService.getUserData();
  }
}
