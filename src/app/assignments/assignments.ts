import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { Rendu } from './../shared/rendu';
import { NonRendu } from './../shared/nonrendu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { Assignment } from './assignment.model';
import { AssignmentDetail } from "./assignment-detail/assignment-detail";


@Component({
  selector: 'app-assignments',
  imports: [DatePipe, MatDividerModule, Rendu, NonRendu, MatButtonModule,
    FormsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatFormFieldModule, MatListModule, AssignmentDetail],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css',
})
export class Assignments implements OnInit {
  titre = "Mon application sur les Assignments !";
  ajoutActive = false;
  nomDevoir:string = "";
  dateRendu!:Date;
  assignmentSelectionne!:Assignment;
  assignments:Assignment[] = [{
    nom: 'Angular Project',
    dateDeRendu: new Date('2024-12-31'),
    rendu: false
  },
  {
    nom: 'TypeScript Basics',
    dateDeRendu: new Date('2024-11-15'),
    rendu: true
  }];

  ngOnInit():void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  assignmentClique(assignment:Assignment) {
    this.assignmentSelectionne = assignment;
  }


  onSubmit(){
    //console.log(this.nomDevoir);
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;

    this.assignments.push(newAssignment);
  }

  getColor(a: any) {
   if (a.rendu) return 'green';
   else return 'red';
  }

}
