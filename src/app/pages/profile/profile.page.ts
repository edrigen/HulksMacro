import { Component, OnInit } from '@angular/core';
import { ProfileService, StudentProfile } from '../../services/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone:false
})
export class ProfilePage implements OnInit {
  profile!: StudentProfile;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
}