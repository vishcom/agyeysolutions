import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

  form = new FormGroup({
    fullName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    mobileNumber: new FormControl('',Validators.required),
  })

  constructor() { }

  ngOnInit() {
  }

}
