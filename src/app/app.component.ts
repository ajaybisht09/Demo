import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';
import { count, take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  mobilenumber:any;
  IsAlternateNoSame:boolean=false;
  number_starts=true;
  number_length=true;
  test:any='';
  _name:any;
  _class:any;
  _rollno:any;
  i:number=0;
  x:boolean=false;
  y:boolean=false;
  Fname="Peter";
  Lname="johns";
  sname:string="";
  firstname:string="rahul";
  lastname:string="bisht";
  array:any=["ajay","rahul","bhanu","amit","mohit","rohan","ram","shyam","sumit","raju"];
  xyz:number[]=[1,2,3,4,5,6,7,8,9,10];
  z:boolean=false;
  is_edit:boolean=false;
    studentdetail:any=[{id:1,name:'ajay',class:12,rollno:101},{id:2,name:'amit',class:12,rollno:102},
  {id:3,name:'aman',class:12,rollno:103},{id:4,name:'ankit',class:12,rollno:104},{id:5,name:'arif',class:12,rollno:105},
  {id:6,name:'anurag',class:12,rollno:106},{id:7,name:'agustya',class:12,rollno:107},{id:8,name:'anuj',class:12,rollno:108},
  {id:9,name:'amnol',class:12,rollno:109},{id:10,name:'ankur',class:12,rollno:110}];

  numbers:any=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  is_odd:boolean=false;
  is_even:boolean=false;
 
  is_prime:boolean=false;
 
  counts:any[]=[];

  open_div:boolean=false;
  stop_div:boolean=false;
  printedValue:any
  num:any=0;
  id:any=0;

 

  ngOnInit() {
    // Create an observable that emits values every second, up to 5 values
    // const intervalObservable = interval(1000).pipe(take(1000000));

    // // Subscribe to log values
    // intervalObservable.subscribe(value => {
    //   console.log('Interval Value:', value);
    // });

    // // Create an observable that emits a value after a 3-second delay
    // const timerObservable = timer(3000);

    // // Subscribe to react after the delay
    // timerObservable.subscribe(() => {
    //   console.log('Timer completed after 3 seconds');
    // });
  }

  OnInputMobileNum(event:any)
  {
    debugger;
    if(this.mobilenumber==event.target.value)
    {
      this.IsAlternateNoSame=true;
    }
    else
    {
      this.IsAlternateNoSame=false;
    }
  }
  show(){
    this.x=true;
    this.sname="ajay";
  
  }
  hide(){
    this.x=false;
  }
display(){
  if(this.y==false)
  this.y=true;
  else
  {
this.y=false;
  }
   }

 colourchange(){
  this.z=true;
    
  }
  colourchange1(){
    this.z=false;
      
    }
    edit(id:any){
      this.is_edit=true;
      alert(id);
      for( this.i=0;this.i<this.studentdetail.length;this.i++)
{
   if(id==this.studentdetail[this.i].id)
  {
    this._name=this.studentdetail[this.i].name;
    this._class=this.studentdetail[this.i].class;
    this._rollno=this.studentdetail[this.i].rollno;
  }

    }

  
}
even(){
  this.is_even=true;

}

odd(){
  this.is_odd=true;

}

prime(){
  this.is_prime=true;

}



isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

start(){
  debugger
  if(this.counts.length==0)
  {
    this.counts.push(this.num);
  }
this.open_div=true;
this.stop_div=false;
this.Interval();
}
end(){
  debugger;
  this.stop_div=true;
  clearInterval(this.id);
}

Interval() {
   this.id=setInterval(() => {
    this.print();
  },   2000);
}
print(){
  debugger;

  if(this.stop_div==false)
  {
    this.num=this.counts[this.counts.length - 1] + 1
    this.counts.push(this.num);
    //this.print();
  }
  else
  {
    return;
  }
}



}




