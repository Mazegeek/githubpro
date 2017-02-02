import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{

    private username: string;
    private client_id= 'eba81ae85b137d53ee4f';
    private client_secret = '3a8183d82b9f5680d4b751e09297f000aa2f4432';

    constructor(private  _http: Http) {
        console.log('Github Service Ready');
        this.username = 'amitbiswas1992';
    }

getUser(){
    return this._http.get('http://api.github.com/users/' +this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());

}
}



