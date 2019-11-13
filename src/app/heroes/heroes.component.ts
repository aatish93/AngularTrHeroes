import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes:any
  constructor(private heroesService:HeroesService) { }

  ngOnInit() {
    this.heroes=this.heroesService.getHeroes();
  }
  addHero(value){
    this.heroesService.addNewHero(value);
  }
  

}
