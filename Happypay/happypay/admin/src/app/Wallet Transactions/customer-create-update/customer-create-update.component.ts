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

  status = [
    {value: 'pending', viewValue: 'Pending'},
    {value: 'success', viewValue: 'Success'},
    {value: 'failed', viewValue: 'Failed'},
  ]

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

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: WalletTransaction,
    private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
    public route: ActivatedRoute,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as WalletTransaction;
    }

    this.form = this.fb.group({
      id: this.defaults.id,
      amount: this.defaults.amount,
      transactionId: this.defaults.transactionId,
      status: this.defaults.status,
      fee: this.defaults.fee,
      payable: this.defaults.payable,
    });
    this.form.get('amount').disable();
    this.form.get('fee').disable();
    this.form.get('payable').disable();
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
  }

  updateCustomer() {
    const WalletTransaction: WalletTransaction = this.form.value;
    WalletTransaction.user = this.defaults.user;
    WalletTransaction.amount = this.defaults.amount;
    WalletTransaction.fee = this.defaults.fee;
    WalletTransaction.payable = this.defaults.payable;
    this.dialogRef.close(WalletTransaction);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
