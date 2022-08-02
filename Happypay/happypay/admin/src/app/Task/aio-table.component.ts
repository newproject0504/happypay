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
import { createTask, deleteTask, getTasks, updateTask } from 'src/@vex/utils/dgraph';

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

  subject$: ReplaySubject<Tasktype[]> = new ReplaySubject<Tasktype[]>(1);
  data$: Observable<Tasktype[]> = this.subject$.asObservable();
  tasks: Tasktype[] = [];
  itemRef: any;
  hotelRef: any;
  hotelId: string;

  @Input()
  columns: TableColumn<Tasktype>[] = [
      { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
      { label: 'Id', property: 'id', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
      { label: 'Image', property: 'image', type: 'image', visible: true },
      { label: 'Title', property: 'title', type: 'text', visible: true, cssClasses: ['font-medium'] },
      { label: 'Task Type', property: 'taskType', type: 'text', visible: true, cssClasses: ['font-medium'] },
      { label: 'Task Sub Type', property: 'tasksubType', type: 'text', visible: true, cssClasses: ['text-secondary'] },
      { label: 'Amount', property: 'amount', type: 'text', visible: true, cssClasses: ['font-medium'] },
      { label: 'Position', property: 'position', type: 'text', visible: true, cssClasses: ['font-medium'] },
      { label: 'Created Time', property: 'createdAt', type: 'text', visible: true, cssClasses: ['text-secondary'] },
      { label: 'Your Profit', property: 'yourProfit', type: 'text', visible: false, cssClasses: ['text-secondary'] },
      { label: 'Youtube Link', property: 'youtubeLink', type: 'text', visible: false, cssClasses: ['text-secondary'] },
      { label: 'Task Link', property: 'ageGroup', type: 'text', visible: false, cssClasses: ['text-secondary'] },
      { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Tasktype> | null;
  selection = new SelectionModel<Tasktype>(true, []);
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
    const tasks:Tasktype[] = [{
      id: '1',
      title: 'Task 1',
      taskType: 'Task Type 1',
      tasksubType: 'Task Sub Type 1',
      amount: 'Amount 1',
      position: 1,
      createdAt: 'Created Time 1',
      yourProfit: 'Your Profit 1',
      youtubeLink: 'Youtube Link 1',
      ageGroup: 'Age Group 1',
      image: 'https://via.placeholder.com/150',
      status: 'Active',
      shortDescription: 'Short Description 1',
      description: 'Description 1',
      profitPiadBy: 'Profit Piad By 1',
      profitTrackingTime: 'Profit Paid To 1',
      specifications: 'Specifications 1',
      instructions: 'Instructions 1',
      termsAndConditions: 'Terms And Conditions 1',
    }];
    getTasks().then(data => {
      const tasks = data.data.queryTask;
      this.subject$.next(tasks);
    })
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.data$.pipe(filter<Tasktype[]>(Boolean)).subscribe(tasks => {
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

  createCustomer() {
    this.dialog.open(CustomerCreateUpdateComponent).afterClosed().subscribe((Tasktype: Tasktype) => {
      if (Tasktype) {
        this.tasks.unshift(Tasktype);
        this.subject$.next(this.tasks);
        createTask(Tasktype).then(data=>console.log(data)).catch(err=>console.log(err));
      }
    });
  }

  createCopy(task: Tasktype) {
    task.id = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    this.tasks.unshift(task);
    createTask(task).then(data=>console.log(data)).catch(err=>console.log(err));
  }

  updateCustomer(Tasktype: Tasktype) {
    console.log(Tasktype);
    this.dialog.open(CustomerCreateUpdateComponent, {
      data: Tasktype
    }).afterClosed().subscribe((updatedItem:Tasktype) => {
      if (updatedItem) {
        const index = this.tasks.findIndex((existingItem) => existingItem.id === updatedItem.id);
        this.tasks[index] = updatedItem;
        this.subject$.next(this.tasks);
        console.log(updatedItem);
        updateTask(updatedItem).then(data=>console.log(data)).catch(err=>console.log(err));
      }
    });
  }


  deleteCustomer(Tasktype: Tasktype) {
    const val = confirm(`Are you sure you want to delete ${Tasktype.title}?`);
    if (val) {
      this.tasks.splice(this.tasks.findIndex((existingItem) => existingItem.id === Tasktype.id), 1);
      this.selection.deselect(Tasktype);
      this.subject$.next(this.tasks);
      deleteTask(Tasktype).then(data=>console.log(data)).catch(err=>console.log(err));
    }
  }

  deleteCustomers(tasks: Tasktype[]) {
    tasks.forEach(c => this.deleteCustomer(c));
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
