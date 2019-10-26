
import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GetUsers } from '../get-users';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./git-search.component.css']
})
export class SearchUsersComponent implements OnInit {
  searchResults: GetUsers ;
  searchQuery: string;
  displayQuery: string;
  show: boolean = true;

  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {
   this.searchQuery = 'meisimo'
   this.displayQuery = this.searchQuery;
   this.gitSearchUsers();
  }

  gitSearchUsers =()=>{
    this.GitSearchService.gitSearchUsers(this.searchQuery).then((response)=>{
      this.searchResults = response;
      this.displayQuery = this.searchQuery;
    },(error) => {
      alert('Error: '+ error.statusText);
    })
  
  
  }
  

}


