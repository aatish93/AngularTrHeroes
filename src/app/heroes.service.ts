import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes:any;
  constructor() {
    this.heroes=
      [{
        id:1,
        name:'Dr IQ'
      },{
        id:2,
        name:'Dynama'
      },{
        id:3,
        name:'Magma'
      },{
        id:4,
        name:'Rubberman'
      },{
        id:5,
        name:'Tornado'
      }]
  }
  getHeroes(){
    return this.heroes;
  }
  getHero(heroId){
    for(var i=0;i<this.heroes.length;i++){
      if(this.heroes[i].id==heroId)
      return this.heroes[i];
    }
  }
  updateHero(heroId,heroName){
    for(var i=0;i<this.heroes.length;i++){
      if(this.heroes[i].id==heroId)
        this.heroes[i].name=heroName;
    }
  }
  getMaxId(){
    var max=0;
    for(var i=0;i<this.heroes.length;i++){
      if(max<this.heroes[i].id)
        max=this.heroes[i].id;
    }
    return max;
  }
  addNewHero(value){
    this.heroes.push({id:(this.getMaxId()+1),name: value})
    return this.getMaxId();
  }
  searchHero(term){
    var list=[];
    for(var i=0;i<this.heroes.length;i++){
      if(this.heroes[i].name.includes(term) && term!='')
        list.push(this.heroes[i]);
    }
    return list;
  }
  deleteHero(id){
    for(var i=0;i<this.heroes.length;i++){
      if(this.heroes[i].id==id){
        this.heroes.splice(i,1);
        return this.heroes;
      }
    }
  }
}
