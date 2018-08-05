import { Injectable } from '@angular/core';
import { Construction } from '../../models/construction.model';

@Injectable()
export class ConstructionService {

    public construction = new Array(

    )

    getConstructionByProject(projectId) {

        let filteredConstruction = this.construction.filter((construction) => construction.projectId == projectId)
        console.log(this.construction, " filtered")
        console.log(filteredConstruction, " filtered")
        return filteredConstruction


    }


    addConstruction(newConstruction: Construction) {

        this.construction.push(newConstruction)
        console.log(this.construction)
    }


}