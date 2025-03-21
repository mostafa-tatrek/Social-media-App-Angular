import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { Iuser } from '../../../models/user.model';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
  @Input() userId!: number;
  @Input() date_cr!: Date;
  user!: Iuser | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUserById(this.userId);
  }
}

