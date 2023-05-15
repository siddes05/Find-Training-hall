import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-hall';
  Training = [

        {
            TrainingName : "Business development",
            TrainingId: "1"
          
          },
          {
              TrainingName : "Marketing",
               TrainingId: "2"
            
          },
          {
             TrainingName : "Sales",
              TrainingId: "3"
           
          },
          {
             TrainingName : "Finance",
             TrainingId: "4"
           
          },
          {
              TrainingName : "Digital Marketing",
              TrainingId: "5"
           
          }      

  ];
  IdInput:any;

  ngOnInit()
  {
    console.log(this.IdInput+"sdsds");
  }

  handleClick(Idref:any)
  {
    this.IdInput = Idref.value;
    console.log(this.IdInput);
  }
 
}
