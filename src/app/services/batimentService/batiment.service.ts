import { Injectable } from '@angular/core';

import { Etage } from '../../models/etage.model';

@Injectable()
export class BatimentService {

    public etages: Etage[] = [];

    getEtageByBatiment(batimentId) {

        let filteredEtage = this.etages.filter((etage) => etage.parentId == batimentId)
        console.log(filteredEtage, " etagefiltered")
        return filteredEtage



    }


    addEtage(newEtage: Etage) {

        this.etages.push(newEtage)

    }

    removeEtage(index) {
        this.etages.splice(index, 1);
    }


}