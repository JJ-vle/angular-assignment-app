import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs'


@Injectable({
  providedIn: 'root',
})

export class AssignmentsService {

  assignments:Assignment[] = [{
    nom: 'TP Angular',
    dateDeRendu: new Date('2025-09-25'),
    rendu: false
  },
  {
    nom: 'Projet Java',
    dateDeRendu: new Date('2025-10-01'),
    rendu: true
  },
  {
    nom: 'Examen HTML',
    dateDeRendu: new Date('2025-10-15'),
    rendu: false
  }];

  getAssignments() : Assignment[] {
    return this.assignments;
  }

  constructor() {
    console.log("Service Assignments créé !");
  }

}