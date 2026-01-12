import { Routes } from '@angular/router';
import { Assignments } from './assignments/assignments';
import { AddAssignment } from './assignments/add-assignment/add-assignment';
import { AssignmentDetail } from './assignments/assignment-detail/assignment-detail';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment';
//import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment';

export const routes: Routes = [
    // home page qui sera affiché avec l'url http://localhost:4200
    // ou htpp://localhost:4200
    // elle va être redirigée vers la page /home
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    // page home qui sera affichée avec l'url http://localhost:4200/home
    { path: 'home', component: Assignments},
    { path: 'add', component: AddAssignment},
    { path: 'assignments/:id', component: AssignmentDetail},
    { path: 'assignments/:id/edit', component: EditAssignmentComponent}
];
