import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messageList:string[]=[];
  constructor() { }
  newMsg(operation,id?){
    switch(operation){
      case 'fetch':
        this.messageList.push("fetched heroes");
        // this.messageList.pipe(map(messagesList => {
        //   messagesList.push("fetched heroes");
        //   return messagesList;
        // }));
        break;
      case 'fetchOne':
        this.messageList.push("fetched hero: id "+id);
        break;
      case 'insert':
        this.messageList.push("inserted hero: id "+id);
        break;
      case "update":
          this.messageList.push("updated hero: id "+id);
          break;
      case "delete":
        this.messageList.push("deleted hero: id "+id);
        break;
      //default: return this.messageList;
    }
  }
  getMessages(){
    return this.messageList;
  }
  clearMessages(){
    this.messageList=[];
    return this.messageList;
  }
}
