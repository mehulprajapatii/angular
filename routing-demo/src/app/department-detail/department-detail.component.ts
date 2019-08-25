import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You Selected Department with id = {{departmentId}} </h3>
    <button (click)="goPrevious()">Previous </button>
    <button (click)="goNext()"> Next</button>
    <p>
      <button (click)="showOverview()">OverView</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {


  public departmentId;
  constructor(private route:ActivatedRoute,private router:Router) {

   }


   goPrevious(){
      let previousId=this.departmentId-1;
      this.router.navigate(['/departments',previousId]);

   }
   goNext(){
     
    let nextId=this.departmentId+1;
    this.router.navigate(['/departments',nextId]);


   }

   gotoDepartments(){
     let selectedId=this.departmentId ? this.departmentId : null;
     /* this.router.navigate(['/departments',{
       id: selectedId,test: "testval"
     }]); */
     this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});

   }

  ngOnInit() {
    // let id=parseInt(this.route.snapshot.paramMap.get('id'));

    // this.departmentId=id;
    this.route.paramMap.subscribe((param:ParamMap)=>{
      let id=parseInt(param.get('id'));
      this.departmentId=id;
    });
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }

}
