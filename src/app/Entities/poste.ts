import {Salle} from './salle';
import {Materiel} from './materiel';

export class Poste{
    // tslint:disable-next-line:variable-name
    id_Poste: bigint;
    // tslint:disable-next-line:variable-name
    adresse_Mac: string;
    // tslint:disable-next-line:variable-name
    adresse_IP: string;
    materiels: Materiel[];
    etat: string;

}
