import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { MessagesService } from '../messages.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes:any;
  searchList:any;
  constructor(private heroesService:HeroesService,private messagesService: MessagesService) { }

  ngOnInit() {
    this.heroes=this.heroesService.getHeroes();
    this.messagesService.newMsg('fetch');
  }
  search(term){
    this.searchList=this.heroesService.searchHero(term);
  }
}