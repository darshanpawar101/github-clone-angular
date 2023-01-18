import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUserLoading = false;
  isReopLoading = false;
  currentpage = 1;
  title = 'github-clone-angular';
  username='';
  userProfile:any={};
  showResult = false;
  showError = false;
  userRepo:any=[];
  userRepoCount=-1;
  repoPageArray:number[] = [];

  async getUserProfile(){
    this.currentpage=1;
    this.repoPageArray=[];
    this.isUserLoading=true;
    this.userRepo=[];
    this.showResult = false;
    this.showError = false;
    let url_user= `https://github-clone-mkh0.onrender.com/users/${this.username}`
    this.userRepoCount=-1;
    const response = await fetch(url_user);
    const json = await response.json();
    this.isUserLoading=false;
    if(response.status === 200){
      this.userProfile=json;
      this.showResult=true;
      if(this.userProfile.public_repos > 0){
        this.isReopLoading=true;
        this.repoPageArray=[];
        this.createPageArray(this.currentpage,this.userProfile.public_repos);
        let url_repo = `https://github-clone-mkh0.onrender.com/users/${this.username}/repos`;
        const repo_response = await fetch(url_repo);
        const repo_json = await repo_response.json();
        this.isReopLoading=false;
        if(repo_response.status === 200){
          this.userRepo=repo_json;
          console.log("User Repo Keys = ",Object.keys(this.userRepo[0]));
        }
      }else{
        this.userRepoCount=0;
      }
    }else{
      this.showError=true;
    }
    //
  }

  createPageArray(currentpagevalue:number,repocount:number){
    let pagecount = Math.floor( repocount/10);
    pagecount = pagecount + (repocount % 10 > 0 ? 1 : 0);
    let startPage = pagecount <= 5 ? 1 : currentpagevalue-3 <= 0 ? 1 : (currentpagevalue-3 >0 && currentpagevalue+2<= pagecount) ? currentpagevalue-2 : pagecount-4;
    let endPage = pagecount <= 5 ? pagecount : currentpagevalue-3 <= 0 ? 5 : (currentpagevalue-3 >0 && currentpagevalue+2 <= pagecount) ? currentpagevalue+2 : pagecount;
    console.log("pagecount = ",pagecount,"startPage = ",startPage,"endPage = ",endPage);
    for(let i=startPage;i<=endPage;i++){
      this.repoPageArray.push(i);
    }
  }

  async getRepoOfPage(value:number){
    this.isReopLoading=true;
    this.currentpage=value;
    this.repoPageArray=[];
    this.createPageArray(this.currentpage,this.userProfile.public_repos)
    console.log(this.currentpage);
    console.log(this.repoPageArray);
    let url_repo = `https://github-clone-mkh0.onrender.com/users/${this.username}/repos?page=${this.currentpage}`;
        const repo_response = await fetch(url_repo);
        const repo_json = await repo_response.json();
        this.isReopLoading=false;
        if(repo_response.status === 200){
          this.userRepo=repo_json;
        }
  }
  
}
