import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;
  constructor(private dataservice:DataService) { 
    console.log('constructor ran..');

  }

  ngOnInit() {
    console.log('ngoninit ran..');
    this.name = 'Alexander';
    this.age = 23;
    this.address = {
      street: 'Rosenhällsvägen 10',
      city: 'Nora',
      state: 'Örebro'
    }
    this.hobbies = ['write code',
                   'watch movies',
                    'listen to music'];
    this.hello = 'Hello';
    this.dataservice.getPosts().subscribe((posts)=>{
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.name ='Jaahoop';
    this.hobbies.push('new hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  
  deleteHobby(hobby){
    for(let i = 0; i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }
    }
    console.log(hobby);
  }

  toggleEdit(){
    this.isEdit =!this.isEdit;
  }


}
interface Post{
  id: number,
  title: string,
  body: string,
  userId:number
}

interface Address{
  street:string,
  city:string,
  state:string
}
