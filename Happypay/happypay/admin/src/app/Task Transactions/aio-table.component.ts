import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../@vex/interfaces/table-column.interface';
import { CustomerCreateUpdateComponent } from './customer-create-update/customer-create-update.component';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { SelectionModel } from '@angular/cdk/collections';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { fadeInUp400ms } from '../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../@vex/animations/stagger.animation';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSelectChange } from '@angular/material/select';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import { ActivatedRoute } from '@angular/router';
import { addWalletTransactions, createTask, deleteTask, getTasks, getTaskTransaction, getUser, updateTask, updateTaskTransaction, updateUserWallet } from 'src/@vex/utils/dgraph';

@UntilDestroy()
@Component({
  selector: 'vex-aio-table',
  templateUrl: './aio-table.component.html',
  styleUrls: ['./aio-table.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class AioTableComponent implements OnInit, AfterViewInit {

  subject$: ReplaySubject<TaskTransaction[]> = new ReplaySubject<TaskTransaction[]>(1);
  data$: Observable<TaskTransaction[]> = this.subject$.asObservable();
  tasks: TaskTransaction[] = [];
  itemRef: any;
  hotelRef: any;
  hotelId: string;

  @Input()
  columns: TableColumn<TaskTransaction>[] = [
      { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
      { label: 'Id', property: 'id', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
      { label: 'Task Name', property: 'taskName', type: 'text', visible: true, cssClasses: ['text-secondary'] },
      { label: 'Amount', property: 'amount', type: 'text', visible: true, cssClasses: ['font-medium'] },
      { label: 'Date', property: 'date', type: 'text', visible: true, cssClasses: ['font-medium'] },
      { label: 'User Name', property: 'userName', type: 'text', visible: true, cssClasses: ['font-secondary'] },
      { label: 'Phone Number', property: 'phone', type: 'text', visible: true, cssClasses: ['font-secondary'] },
      { label: 'Pan Number', property: 'pan', type: 'text', visible: true, cssClasses: ['font-medium'] },
      { label: 'Status', property: 'status', type: 'text', visible: true, cssClasses: ['text-medium'] },
      { label: 'Payment Status', property: 'yourProfit', type: 'text', visible: false, cssClasses: ['text-medium'] },
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<TaskTransaction> | null;
  selection = new SelectionModel<TaskTransaction>(true, []);
  searchCtrl = new FormControl();
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;
  hotelLink = '';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog, public route:ActivatedRoute) {
    getTaskTransaction().then(data => {
      this.tasks = data.data.queryTaskTransaction;
      this.subject$.next(this.tasks);
    });
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.data$.pipe(filter<TaskTransaction[]>(Boolean)).subscribe(tasks => {
      this.tasks = tasks;
      this.dataSource.data = tasks;
    });
    this.searchCtrl.valueChanges.pipe(untilDestroyed(this)).subscribe(value => {
      this.onFilterChange(value);
    });
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  updateCustomer(TaskTransaction: TaskTransaction) {
    this.dialog.open(CustomerCreateUpdateComponent, {
      data: TaskTransaction
    }).afterClosed().subscribe((updatedItem:TaskTransaction) => {
      if (updatedItem) {
        const index = this.tasks.findIndex((existingItem) => existingItem.id === updatedItem.id);
        const temp = {...this.tasks[index]};
        this.tasks[index] = updatedItem;
        this.subject$.next(this.tasks);
        updateTaskTransaction(updatedItem).then(data => console.log(data));
        if(updatedItem.paymentStatus === 'Paid' && temp.paymentStatus !== 'Paid'){
          getUser(updatedItem.user.id).then(data => {
            const user = data.data.queryUser[0];
            const total = user.wallet+updatedItem.amount;
            updateUserWallet(total, temp.user.id).then(res => alert('User Wallet Updated')).catch(err => console.log('User Wallet Update Failed',err));
            const walletTransaction: WalletTransaction = {
              amount: updatedItem.amount,
              id: updatedItem.user.id+"_"+Date.now()+"_"+updatedItem.amount,
              fee: 0,
              payable: updatedItem.amount,
              type: 'CREDIT',
              user: {
                id: updatedItem.user.id,
              },
              status: "Success",
              transactionId: updatedItem.taskName,
            }
            addWalletTransactions(walletTransaction).then(res => console.log('Wallet Transaction Added')).catch(err => console.log('Wallet Transaction Add Failed',err));
          });
        }
      }
    });
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

}
