import { Component, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-add-assignment',
  imports: [MatDividerModule, MatButtonModule,
      FormsModule, MatInputModule, MatDatepickerModule,
      MatFormFieldModule],
  templateUrl: './add-assignment.html',
  styleUrl: './add-assignment.css',
})

export class AddAssignment {
  //@Output() newAssignment = new EventEmitter<Assignment>();

  nomAssignment:string = "";
  dateRendu!:Date;

  constructor(private assignmentsService: AssignmentsService) { }

  onAjouterAssignment(){
    console.log("Ajout NOM = " + this.nomAssignment + " date = " + this.dateRendu);
    
    const newAssignment: Assignment = new Assignment();
    newAssignment.id = Math.floor(Math.random() * 10000);
    newAssignment.nom = this.nomAssignment;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;

    //this.newAssignment.emit(newAssignment);
    //this.assignments.push(newAssignment);
    this.assignmentsService.addAssignment(newAssignment)
      .subscribe(message => {
        console.log(message);
      })
  }

}
