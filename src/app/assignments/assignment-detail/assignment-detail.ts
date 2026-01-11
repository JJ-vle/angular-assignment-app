import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment } from '../assignment.model';
import { MatCardMdImage, MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-assignment-detail',
  imports: [CommonModule, MatCardModule,
    MatCheckboxModule],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css',
})

export class AssignmentDetail implements OnInit {
  @Input() assignmentTransmis!: Assignment;

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {

  }

  onAssignmentRendu(){
    this.assignmentTransmis.rendu = true;

    this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe(message => console.log(message));
  }

  onDelete() {
    this.assignmentsService.deleteAssignment(this.assignmentTransmis)
      .subscribe((message) => console.log(message));

    this.assignmentTransmis = null;
  }

}