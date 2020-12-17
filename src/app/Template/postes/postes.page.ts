import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {MaterielService} from '../../Service/MaterielService/materiel.service';
import {PosteService} from '../../Service/PosteService/poste.service';
import {Materiel} from '../../Entities/materiel';
import {Poste} from '../../Entities/poste';

@Component({
  selector: 'app-postes',
  templateUrl: './postes.page.html',
  styleUrls: ['./postes.page.scss'],
})
export class PostesPage implements OnInit {
  dataReceived: number;
  // tslint:disable-next-line:variable-name
  id_Salle: number;
  // tslint:disable-next-line:variable-name
  id_Poste: bigint;
  etat = '';
  materiels: Materiel[];

  postes: Poste[];

  data = '';
  // Poste: any;
  constructor(private router: Router, public activatedRoute: ActivatedRoute
              // tslint:disable-next-line:align
              , private posteService: PosteService, private materielService: MaterielService) {}

  onClick(){

    this.router.navigate(['/salles']);
  }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      // @ts-ignore
      this.dataReceived = this.activatedRoute.snapshot.paramMap.get('id');
      this.posteService.getPostes(this.dataReceived)
          .subscribe(value => {
            console.log(value);
            this.postes = value;
          }, error => console.log(error));

    });
  }

}
