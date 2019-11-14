import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes:any
  constructor(private heroesService:HeroesService,private messagesService:MessagesService) { }

  ngOnInit() {
    this.heroes=this.heroesService.getHeroes();
    this.messagesService.newMsg('fetch');
  }
  addHero(value){
    var id=this.heroesService.addNewHero(value);
    this.messagesService.newMsg('insert',id);
  }
  deleteHero(id){
    this.heroes=this.heroesService.deleteHero(id);
  }
  

}
