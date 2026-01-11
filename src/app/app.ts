import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Assignments } from './assignments/assignments'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,
            MatButtonModule, MatIconModule, MatDividerModule,
            //Assignments
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected readonly title = signal('assignment-app');
  titre = "Application de gestion des assignments";
  prof:string = "Michel Buffa";

  ngOnInit(): void{

  }
}


// diapo 167
// https://docs.google.com/presentation/d/1Z6-lyeMALH-pLg1pMFXzfJ8ZGz6TL3dYytved0445jc/edit?slide=id.ga2aa790270_0_505#slide=id.ga2aa790270_0_505