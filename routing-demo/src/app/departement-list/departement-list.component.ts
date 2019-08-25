import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-departement-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)=onSelect(department) [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartementListComponent implements OnInit {
  public selectedId;
  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"},
    {"id":6,"name":"PHP"},
  ];
  onSelect(departement){
    
    /* Absolute path */
    //this.router.navigate(['/departments',departement.id])//link parameter array
    this.router.navigate([departement.id],{relativeTo:this.route});
    /* Relative Navigation */

  }

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      let id=parseInt(param.get('id'));
      this.selectedId=id;
    });
  }
  
  isSelected(departement){
      return departement.id === this.selectedId;
  }

}
