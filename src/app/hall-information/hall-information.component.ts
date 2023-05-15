import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hall-information',
  templateUrl: './hall-information.component.html',
  styleUrls: ['./hall-information.component.css']
})
export class HallInformationComponent {

  @Input('TrainingId') public TrainingId:any;
  hall:any;

  ngOnChanges(){

    if(this.TrainingId == '1'){

      this.hall=["seaview delight"]

  }

  if(this.TrainingId == '2'){

    this.hall=["Ibm labs"]

}

if(this.TrainingId == '3'){

  this.hall=["nehru hall"]

}

if(this.TrainingId == '4'){

  this.hall=["moon"]

}

if(this.TrainingId == '5'){

  this.hall=["delight"]

}
 

  }

}
