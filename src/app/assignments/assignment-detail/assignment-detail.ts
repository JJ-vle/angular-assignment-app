import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment } from '../assignment.model';
import { MatCardMdImage, MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-assignment-detail',
  imports: [CommonModule, MatCardModule, MatCardMdImage,
    MatCheckboxModule],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css',
})
export class AssignmentDetail{
  @Input() assignmentTransmis!: Assignment;

  onAssignmentRendu(){
    if(this.assignmentTransmis){
      this.assignmentTransmis.rendu = !this.assignmentTransmis.rendu;
    }
  }

}

// diapo 113
// https://docs.google.com/presentation/d/1Z6-lyeMALH-pLg1pMFXzfJ8ZGz6TL3dYytved0445jc/edit?slide=id.ga2aa790270_0_505#slide=id.ga2aa790270_0_505