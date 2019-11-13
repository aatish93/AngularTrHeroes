import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes:any;
  searchList:any;
  constructor(private heroesService:HeroesService) { }

  ngOnInit() {
    this.heroes=this.heroesService.getHeroes();

  }
  search(term){
    this.searchList=this.heroesService.searchHero(term);
  }

}
