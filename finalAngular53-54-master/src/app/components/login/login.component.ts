import {Component, OnInit} from '@angular/core';
import {UserAdminService} from '../../service/user-admin.service';
import {ToastrService} from 'ngx-toastr';
import AdminUserDTO from '../../dto/AdminUserDTO';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private userAdminService: UserAdminService,
    private toastrService: ToastrService,
  ) {
  }

  userEmail = '';
  userPassword = '';

  signUpEmail = '';
  signUpPassword = '';
  signName = '';
  signUpContact = '';

  userEmailErrorState = false;
  userPasswordErrorState = false;
  loading = false;

  signUpEmailErrorState = false;
  signUpPasswordErrorState = false;

  // tslint:disable-next-line:typedef
  login() {
    if (this.userEmail.trim().length > 0) {
      this.userEmailErrorState = false;
    } else {
      this.userEmailErrorState = true;
      return;
    }

    if (this.userPassword.trim().length > 0) {
      this.userPasswordErrorState = false;
    } else {
      this.userPasswordErrorState = true;
      return;
    }

    this.loading = true;
    this.userAdminService.loginUser(this.userEmail.trim(), this.userPassword.trim()).subscribe(result => {
      if (result.message === 'Record not found!') {
        this.onWarning(result.message);
        this.loading = false;
      }
      if (result.message === 'Try Again!') {
        this.onWarning(result.message);
        this.loading = false;
      }
      if (result.message === 'success!') {
       // console.log(result.data);
        const obj = JSON.parse(result.data);
       // console.log(obj);
        this.router.navigate(['/dashboard', obj.name]).then();
        this.onSuccess(result.message);
        this.loading = false;
      }
    });

  }

  // tslint:disable-next-line:typedef
  signUp() {
    this.loading = true;
    const adminUser = new AdminUserDTO(
      this.signUpEmail.trim(),
      this.signUpPassword.trim(),
      this.signName.trim(),
      this.signUpContact.trim()
    );
    this.userAdminService.registerUser(adminUser).subscribe(response => {
      if (response.isRegistered === true) {
        this.onSuccess('Thank You!');
        this.loading = false;
      }
      if (response.isRegistered === 'Email Already Exists!') {
        this.onWarning(response.isRegistered);
        this.loading = false;
      }
    });
  }


  onWarning(message: string) {
    this.toastrService.warning(message, 'Warning!', {
      timeOut: 500
    });
  }

  // tslint:disable-next-line:typedef
  onError(message: string) {
    this.toastrService.error(message, 'Error!', {
      positionClass: 'toast-bottom-right'
    });
  }

  onInfo(message: string) {
    this.toastrService.info(message, 'Info!', {
      progressBar: true
    });
  }

  onSuccess(message: string) {
    this.toastrService.success(message, 'Success!', {
      tapToDismiss: true
    });
  }


  ngOnInit(): void {
  }

}
