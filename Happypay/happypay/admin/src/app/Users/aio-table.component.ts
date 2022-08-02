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
import { createTask, deleteTask, getTasks, getUsers, updateTask } from 'src/@vex/utils/dgraph';

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

  subject$: ReplaySubject<User[]> = new ReplaySubject<User[]>(1);
  data$: Observable<User[]> = this.subject$.asObservable();
  tasks: User[] = [];
  itemRef: any;
  hotelRef: any;
  hotelId: string;

  @Input()
  columns: TableColumn<User>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Id', property: 'id', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'User Name', property: 'username', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Email', property: 'email', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Password', property: 'password', type: 'text', visible: true, cssClasses: ['font-secondary'] },
    { label: 'Address', property: 'address', type: 'text', visible: true, cssClasses: ['text-secondary'] },
    { label: 'Pincode', property: 'pincode', type: 'text', visible: true, cssClasses: ['font-secondary'] },
    { label: 'Date of Birth', property: 'dob', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Wallet', property: 'wallet', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Gender', property: 'gender', type: 'text', visible: false, cssClasses: ['text-medium'] },
  ];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<User> | null;
  selection = new SelectionModel<User>(true, []);
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
    getUsers().then(data => {
      console.log(data);
      const tasks = data.data.queryUser;
      this.subject$.next(tasks);
    })
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.data$.pipe(filter<User[]>(Boolean)).subscribe(tasks => {
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

  // createCustomer() {
  //   this.dialog.open(CustomerCreateUpdateComponent).afterClosed().subscribe((User: User) => {
  //     if (User) {
  //       this.tasks.unshift(User);
  //       this.subject$.next(this.tasks);
  //     }
  //   });
  // }

  // updateCustomer(User: User) {
  //   console.log(User);
  //   this.dialog.open(CustomerCreateUpdateComponent, {
  //     data: User
  //   }).afterClosed().subscribe((updatedItem:User) => {
  //     if (updatedItem) {
  //       const index = this.tasks.findIndex((existingItem) => existingItem.id === updatedItem.id);
  //       this.tasks[index] = updatedItem;
  //       this.subject$.next(this.tasks);
  //       console.log(updatedItem);
  //     }
  //   });
  // }


  // deleteCustomer(User: User) {
  //   const val = confirm(`Are you sure you want to delete ${User.username}?`);
  //   if (val) {
  //     this.tasks.splice(this.tasks.findIndex((existingItem) => existingItem.id === User.id), 1);
  //     this.selection.deselect(User);
  //     this.subject$.next(this.tasks);
  //   }
  // }

  // deleteCustomers(tasks: User[]) {
  //   tasks.forEach(c => this.deleteCustomer(c));
  // }

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
