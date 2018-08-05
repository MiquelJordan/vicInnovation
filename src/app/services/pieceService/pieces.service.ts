import { Injectable } from '@angular/core';
import { Piece } from '../../models/piece.model';


@Injectable()
export class PieceService {

    public pieces: Piece[] = [];

    getPieceByAppartement(appartementId) {

        let filteredPiece = this.pieces.filter((piece) => piece.parentId == appartementId)
        console.log(filteredPiece, " etagefiltered")
        return filteredPiece
    }

    addPiece(newPiece: Piece) {
        this.pieces.push(newPiece)
    }

    removePiece(index) {
        this.pieces.splice(index, 1);
    }

}