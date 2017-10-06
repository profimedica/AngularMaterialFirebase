import { Component, OnInit } from '@angular/core';
import {MdChipInputEvent, ENTER} from '@angular/material';
import { 
  NgForm, 
  FormBuilder, 
  FormControl, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import { Contact } from '../shared';
import { MyModel } from './MyModel';
import {  
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdFormFieldModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdSelectModule,
  MdSlideToggleModule,
  MdSliderModule,
  MdSidenavModule,
  MdStepperModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MdPaginatorModule,
  MdSortModule,
  MdTableModule,
  MdSnackBarModule, } from '@angular/material';

import { AlertService, UserService } from '../shared';

const COMMA = 188;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myControl: FormControl = new FormControl();
  
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  public DataContext = new MyModel();
  
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder, // only for stepper
    private alertService: AlertService,
    private userService: UserService) {
  }

  add(event: MdChipInputEvent): void {
    console.log('++++++++++');
    let input = event.input;
    let value = event.value;

    // Add our person
    if ((value || '').trim()) {
      this.DataContext.UserOptions.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    console.log('----------');
    let index = this.DataContext.UserOptions.indexOf(fruit);

    if (index >= 0) {
      this.DataContext.UserOptions.splice(index, 1);
    }
  }
  
  filter(val): string[] {
    console.log('*********');
    if(typeof(val) !== 'string')
    {
      val = JSON.stringify(val);
    }
    return this.DataContext.UserOptions.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  ngOnInit() {

    // Only for stepper
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    // Only for autocomplete with filter
    this.DataContext.filteredOptions = this.myControl.valueChanges
    .startWith(null)
    .map(val => val ? this.filter(val) : this.DataContext.UserOptions.slice());
  }

  onSubmit(form: NgForm) { 
   /*const company = form.value.company;
   const firstname = form.value.firstname;
   const lastname = form.value.lastname;
   const address = form.value.address;
   const city = form.value.city;
   const postal = form.value.postal;
   const message = form.value.message;
   this.userService.contactFormSend(company, firstname, lastname, address, city, postal, message);*/
  }

}
