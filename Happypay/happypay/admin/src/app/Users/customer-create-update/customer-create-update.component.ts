import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vex-customer-create-update',
  templateUrl: './customer-create-update.component.html',
  styleUrls: ['./customer-create-update.component.scss']
})
export class CustomerCreateUpdateComponent implements OnInit {

  form: FormGroup;
  hotelRef: any
  mode: 'create' | 'update' = 'create';

  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: Tasktype,
    private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
    public route: ActivatedRoute,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Tasktype;
    }

    this.form = this.fb.group({
      id: this.defaults.id || this.getId(),
      image: this.defaults.image || '',
      title: this.defaults.title || '',
      taskType: this.defaults.taskType || '',
      tasksubType: this.defaults.tasksubType || '',
      amount: this.defaults.amount || 0,
      position: this.defaults.position || 0,
      status: this.defaults.status || '',
      shortDescription: this.defaults.shortDescription || '',
      description: this.defaults.description || '',
      yourProfit: this.defaults.yourProfit || '',
      youtubeLink: this.defaults.youtubeLink || '',
      profitTrackingTime: this.defaults.profitTrackingTime || '',
      profitPiadBy: this.defaults.profitPiadBy || '',
      ageGroup: this.defaults.ageGroup || '',
      specifications: this.defaults.specifications || '',
      instructions: this.defaults.instructions || '',
      termsAndConditions: this.defaults.termsAndConditions || '',
    });
  }

  getId() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }

  createCustomer() {
    const Tasktype: Tasktype = this.form.value;
    Tasktype.createdAt = new Date().toLocaleDateString();
    if (Tasktype.title && Tasktype.amount && Tasktype.taskType && Tasktype.tasksubType && Tasktype.image && Tasktype.description) {
      this.dialogRef.close(Tasktype);
    }
    else alert("Please fill all the fields");
  }

  updateCustomer() {
    const Tasktype: Tasktype = this.form.value;
    Tasktype.createdAt = this.defaults.createdAt;
    this.dialogRef.close(Tasktype);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
