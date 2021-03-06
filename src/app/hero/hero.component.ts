import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Location } from '@angular/common';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  id:BigInteger;
  name:String;
  constructor(private heroesService:HeroesService,private messagesService:MessagesService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.id = params.id
    );
    this.name=this.heroesService.getHero(this.id).name
    this.messagesService.newMsg('fetchOne',this.id);
  }
  goBack(): void {
    this.location.back();
  }
  save(){
    this.heroesService.updateHero(this.id,this.name);
    this.messagesService.newMsg('update',this.id);
    this.goBack();
  }

}
