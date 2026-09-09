import { Injectable } from '@angular/core';

export interface StudentProfile {
  name: string;
  username: string;
  email: string;
  address: string;
  avatarUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile: StudentProfile = {
    name: 'Edrich Salazar Predas',
    username: 'edrigen',
    email: 'examplekolangpoitoMaamMonisHhehehe@gmail.com',
    address: 'Valenzuela City, Metro Manila',
    avatarUrl: 'assets/images/gwapo.jpg'
  };

  getProfile(): StudentProfile {
    return this.profile;
  }
}