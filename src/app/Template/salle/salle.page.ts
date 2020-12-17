import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SalleService} from '../../Service/SalleService/salle.service';
import {Salle} from '../../Entities/salle';

@Component({
  selector: 'app-salle',
  templateUrl: 'salle.page.html',
  styleUrls: ['salle.page.scss']
})
export class SallePage implements OnInit{

   // Salle: any;
   salles: Salle[];


  constructor(private router: Router, private salleService: SalleService) {
  }

  ngOnInit(): void {
    this.getSalles();
  }

  private getSalles(){
    this.salleService.getSallesList().subscribe((value: Salle[]) => {
      this.salles = value;
      console.log(value);
    });
  }

  onClick(){
    this.router.navigate(['/postes']);
  }
  onClickMenu(){
    this.router.navigate(['/postes']);
  }
  onClickSalle(){
    this.router.navigate(['/salles']);
  }
  onClickHome(){
    this.router.navigate(['/home']);
  }

  /*PassIdSalleToPoste(){
    this.router.navigate(['/postes'], {queryParams: {id}});
  }*/



}
