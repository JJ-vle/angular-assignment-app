import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging';


@Injectable({
  providedIn: 'root',
})

export class AssignmentsService {

  assignments:Assignment[] = [{
    id:1,
    nom: 'TP Angular',
    dateDeRendu: new Date('2025-09-25'),
    rendu: false
  },
  {
    id:2,
    nom: 'Projet Java',
    dateDeRendu: new Date('2025-10-01'),
    rendu: true
  },
  {
    id:3,
    nom: 'Examen HTML',
    dateDeRendu: new Date('2025-10-15'),
    rendu: false
  }];


  getAssignments() : Observable<Assignment[]> {
    return of(this.assignments);
  }

  
  getAssignment(id:number) : Observable<Assignment | undefined> {
    const a = this.assignments.find(a => a.id === id);
    return of(a);
  }

  addAssignments(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    return of('Assignment ajouté');
  }

  updateAssignment(assignment:Assignment):Observable<string> {
    return of("Assignment service: assignment modifié !");
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    return of("Assignment added successfully");
  }

  deleteAssignment(assignment:Assignment):Observable<string> {
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos,1);

    return of("Assignment service: assignment supprimé !");
  }

  constructor(private LoggingService:LoggingService) {
    
    console.log("Service Assignments créé !");

  } 

}