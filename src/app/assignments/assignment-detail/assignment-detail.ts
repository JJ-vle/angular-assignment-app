import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment } from '../assignment.model';
import { MatCardMdImage, MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  imports: [CommonModule, MatCardModule,
    MatCheckboxModule],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css',
})

export class AssignmentDetail implements OnInit {
  //@Input()
  assignmentTransmis?: Assignment;
  @Output() deleteAssignment = new EventEmitter<Assignment>();
  
  constructor(private assignmentsService: AssignmentsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    // utiliser ActivatedRoute pour lire l'id dans l'URL
    const id = +this.route.snapshot.params['id']; // le + convertit en number
    this.assignmentsService.getAssignment(id)
      .subscribe(a => {
        this.assignmentTransmis = a;
    });
  }

  onAssignmentRendu(){
    this.assignmentTransmis.rendu = true;

    this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        // l'assignment a été modifié côté service 
        console.log(message)
        this.router.navigate(['/home']);
      });
  }
/*
  onDelete() {
    this.assignmentsService.deleteAssignment(this.assignmentTransmis)
      .subscribe((message) => console.log(message));

    this.assignmentTransmis = null;
  }
*/


/*************************** PB ICI NON ???? ***************/
  onDeleteAssignment(){
    // On va envoyer un event au composant père pour qu'il supprime l'assignment
    this.deleteAssignment.emit(this.assignmentTransmis);
    
    // si on veut que le panneau de détails disparaisse de l'affichage
    // il faut remettre à null ou undefined this.assignmentTransmis
    // this.assignmentTransmis = undefined;
    this.router.navigate(['/home']);
  }

  onClickEdit() {
    if(!this.assignmentTransmis) return;
    this.router.navigate(['assignments/${this.assignmentTransmis.id}/edit'],
    {queryParams:{nom:this.assignmentTransmis.nom}, fragment:'edition'})
  }

}