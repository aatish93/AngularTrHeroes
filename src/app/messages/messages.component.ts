import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  //messagesList=[];
  messagesList: string[];
  constructor(private messagesService:MessagesService) { }

  ngOnInit() {
    this.messagesList=this.messagesService.getMessages();
    //.subscribe((messagesList :string[])=>this.messagesList=messagesList);
  }
  clearMessages(){
    this.messagesList=this.messagesService.clearMessages();
  }
}
