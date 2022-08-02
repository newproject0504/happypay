import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/types/login.type';
import { UserService } from 'src/app/utils/data.service';
import {  getDownloadURL, Storage, uploadBytes } from '@angular/fire/storage'
import { ref } from 'firebase/storage';
import { addWalletTransactions, updateUser } from 'src/app/utils/dgraph';
import { BankDetails, WalletTransaction } from 'src/app/types/tasks.type';

@Component({
  selector: 'app-profile-authentication',
  templateUrl: './profile-authentication.component.html',
  styleUrls: ['./profile-authentication.component.scss']
})
export class ProfileAuthenticationComponent implements OnInit {

  user: User;
  aadhaarLink: string;
  panLink: string;
  wallet: number = 0;
  collegeId: string;
  totalEarning = 0;
  walletContent = `
  1. Minimum withdrawal is Rs 100/-.
  2. We are not liable for incorrect bank account details.`;
  constructor(public userService: UserService,private router: Router, public firestorage: Storage) { }

  ngOnInit(): void {
    this.userService.getUser.subscribe(user => {
      if (user) this.user = user;
      else this.router.navigate(['/']);
      this.aadhaarLink = this.user.AadhaarCardImage;
      this.panLink = this.user.panCardImage;
      this.collegeId = this.user.collegeId;
      if(user.wallet) this.wallet = user.wallet;
      if(user.totalEarnings) this.totalEarning = user.totalEarnings;
      const creditedWalletTransaction: WalletTransaction[] = this.user.walletTransaction.filter(transaction => transaction.type === 'CREDIT');
      const debitedWalletTransaction: WalletTransaction[] = this.user.walletTransaction.filter(transaction => transaction.type === 'DEBIT');
      const table = document.getElementById('table');
      table.innerHTML = '';
      for (let i = 0; i < creditedWalletTransaction.length; i++) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');
        const cell5 = document.createElement('td');
        const cell6 = document.createElement('td');
        cell1.innerText = creditedWalletTransaction[i].id;
        cell2.innerText = creditedWalletTransaction[i].amount+"";
        cell3.innerText = creditedWalletTransaction[i].fee+"";
        cell4.innerText = creditedWalletTransaction[i].payable+"";
        cell5.innerText = creditedWalletTransaction[i].transactionId;
        cell6.innerText = creditedWalletTransaction[i].status;
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);
        table.appendChild(row);
        this.totalEarning += creditedWalletTransaction[i].payable;
      }

      const table2 = document.getElementById('table2');
      table2.innerHTML = '';
      for (let i = 0; i < debitedWalletTransaction.length; i++) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');
        cell1.innerText = debitedWalletTransaction[i].id;
        cell2.innerText = debitedWalletTransaction[i].amount+"";
        cell3.innerText = debitedWalletTransaction[i].transactionId;
        cell4.innerText = debitedWalletTransaction[i].status;
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        table2.appendChild(row);
      }
    })
  }

  widthdrawal(){
    const amount: any = document.getElementById('wamount');
    const amt = parseInt(amount.value);
    if(amt>=100 && amt<=this.wallet){
      this.user.wallet = this.wallet - amt;
      updateUser(this.user).then(res => alert('wallet updated')).catch(res => console.log(res));
      const walletTransaction: WalletTransaction = {
        amount: amt,
        id: this.user.id+"_"+Date.now()+"_"+amt,
        fee: parseInt((amt*0.05).toFixed(2)),
        payable: parseInt((amt*0.95).toFixed(2)),
        type: 'DEBIT',
        user: {
          id: this.user.id,
        },
        status: "pending",
        transactionId: "Not yet paid",
      }
      addWalletTransactions(walletTransaction).then(res => alert('added to transactions')).catch(res => console.log(res));
    }
    else alert('Insufficient balance');
    setTimeout(()=>this.userService.fetch(this.user.phone),1000);
    return false;
  }

  uploadAadhaar(event) {
    const file = event.target.files[0];
    const storageRef = ref(this.firestorage, 'aadhaar/'+this.user.username);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        console.log('File available at', url);
        this.user.AadhaarCardImage = url;
        this.aadhaarLink = url;
      });
    });
  }

  uploadPan(event) {
    const file = event.target.files[0];
    const storageRef = ref(this.firestorage, 'pan/'+this.user.username);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        console.log('File available at', url);
        this.user.panCardImage = url;
        this.panLink = url;
      });
    });
  }

  uploadCollegeId(event) {
    const file = event.target.files[0];
    const storageRef = ref(this.firestorage, 'collegeId/'+this.user.username);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        console.log('File available at', url);
        this.user.collegeId = url;
        this.collegeId = url;
      });
    });
  }

  updatePersonalInfo() {
    const username: any = document.getElementById('username');
    const email: any = document.getElementById('email');
    const address: any = document.getElementById('address');
    const pincode: any = document.getElementById('pincode');
    const gender: any = document.getElementsByName('gender');
    if (!gender[0].checked) this.user.gender = "female";
    else this.user.gender = "male";
    this.user.username = username.value;
    this.user.email = email.value;
    this.user.address = address.value;
    this.user.pincode = pincode.value;
    updateUser(this.user).then(() => {
      alert('updated');
    });
    return false;
  }

  updateKYC() {
    const pan: any = document.getElementById('pan');
    const aadhaar: any = document.getElementById('aadhaar');
    this.user.panCardNumber = pan.value;
    this.user.AadhaarCardNumber = aadhaar.value;
    updateUser(this.user).then(() => {
      alert('updated');
    });
    return false;
  }

  updateCollege() {
    const college: any = document.getElementById('college');
    const branch: any = document.getElementById('branch');
    const passout: any = document.getElementById('passout');
    const rollNo: any = document.getElementById('rollNo');
    this.user.college = college.value;
    this.user.branch = branch.value;
    this.user.passout = passout.value;
    this.user.rollNo = rollNo.value;
    updateUser(this.user).then(() => {
      alert('updated');
    });
    return false;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  updatepassword() {
    const opass: any = document.getElementById('opass');
    const npass: any = document.getElementById('npass');
    const nrpass: any = document.getElementById('nrpass');
    if (opass.value === this.user.password) {
      if (npass.value === nrpass.value && npass.value.length==6) {
        this.user.password = npass.value;
        updateUser(this.user).then(res => alert('updated')).catch(res => {
          alert('something went wrong');
          console.log(res);
        });
      }
      else alert('password does not match');
    }
    else alert('please enter correct password')
    return false;
  }

  updateBankDetails(){
    const bankName: any = document.getElementById('bank-name');
    const bankAccount: any = document.getElementById('bank-account');
    const bankIfsc: any = document.getElementById('bank-code');
    const bankHolder: any = document.getElementById('bank-holder');
    if(bankName.value && bankAccount.value && bankIfsc.value && bankHolder.value){
      const bankDetails: BankDetails = {
        id: bankAccount.value,
        bankName: bankName.value,
        ifcsCode: bankIfsc.value,
        userName: bankHolder.value,
      }
      this.user.bankDetails = bankDetails;;
      updateUser(this.user).then(res => alert('updated')).catch(res => {
        alert('something went wrong');
        console.log(res);
      });
    }
    return false;
  }

}
