import { Component, OnInit, Input } from '@angular/core';
import { Piece } from '../../models/piece.model';
import { FormControl } from '../../../../node_modules/@angular/forms';
import { PieceService } from '../../services/pieceService/pieces.service';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.css']
})


export class PiecesComponent implements OnInit {
  @Input() appartementId: any;

  public pieces: Piece[] = [];

  selected = new FormControl(0);

  constructor(private pieceService: PieceService) { }

  ngOnInit() {
    this.pieces = this.pieceService.getPieceByAppartement(this.appartementId)

  }

  addTab() {

    let newAppartement =
      new Piece(
        new Date().getTime(),
        this.appartementId
      );
    this.pieceService.addPiece(newAppartement)
    console.log(this.pieces)
    this.pieces = this.pieceService.getPieceByAppartement(this.appartementId)
    this.selected.setValue(this.pieces.length);

  }

  removeTab(index: number) {
    this.pieceService.removePiece(index)
    this.pieces = this.pieceService.getPieceByAppartement(this.appartementId)
  }
}
