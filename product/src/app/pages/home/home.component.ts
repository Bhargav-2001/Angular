import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
productlist:any;
   constructor(private hs:HomeService){
    this.hs.getProducts().subscribe(
      {
    next: (data:any)=>this.productlist=data,
    error: ()=> this.productlist = [] 
   }
   )
}
}
