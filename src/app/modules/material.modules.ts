import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
    imports: [
        MatListModule,
        MatSelectModule,
        MatButtonModule,
        CommonModule,
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        MatExpansionModule,
        MatDialogModule,

    ],
    exports: [
        MatSelectModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        MatDialogModule,


    ],
    declarations: []
})
export class MaterialModule { }
