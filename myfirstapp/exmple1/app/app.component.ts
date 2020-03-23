import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: [`
    //h3 {
      //color: dodgerblue;
    //}
  //`]
})
// In one hand is a normal component, but in the other hand it's also a kind of special because it serves as our root component
// it's in the end listed here in the app module.ts in this bootstrap array which tells angular, hey this is a special component
// you should bootstrap the whole application with that component being the root component
// So all other components we create will not be added to the index.html file, there selectors will not be added here
// there selectors will be added to the app.component.html file
export class AppComponent {

}
