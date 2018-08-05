import { Injectable } from '@angular/core';
import { Appartement } from '../../models/appartement.model';


@Injectable()
export class AppartementService {

    public appartements: Appartement[] = [];

    getAppartementByEtage(etageId) {

        let filteredAppartement = this.appartements.filter((appartement) => appartement.parentId == etageId)
        console.log(filteredAppartement, " etagefiltered")
        return filteredAppartement



    }


    addAppartement(newAppartement: Appartement) {

        this.appartements.push(newAppartement)

    }

    removeAppartement(index) {
        this.appartements.splice(index, 1);

    }

}