import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({providedIn:'root'})


export class FlipkartAdminGuard implements CanActivate{
    constructor(private route:Router){}

    public userRole:string = 'customer';
    canActivate():boolean{
        if(this.userRole !== 'admin'){
            this.route.navigate(['login'])
        }
        return true;
    }
}