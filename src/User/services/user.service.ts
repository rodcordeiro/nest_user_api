import { Injectable } from '@nestjs/common';
import { iUser } from '../interfaces';
import { CreateUserDTO } from '../dto';
import { v4 as uuid } from 'uuid';
import { GetAddress } from '../../utils/api';
interface iSearchableOptions {
  id?: string;
  name?: string;
}

@Injectable()
export class UserService {
  private users: any[] = [];
  findAll(): iUser[] {
    return this.users;
  }

  findOne(data: iSearchableOptions): iUser | iUser[] {
    const { id, name } = data;
    if (this.users.length) {
      return this.users.filter((user: iUser) => {
        if (name && user.name.includes(name)) {
          console.log(user.name.includes(name));
          return user;
        }
        if (user.id === id) {
          return user;
        }
      });
    }
  }
  create(user: CreateUserDTO) {
    const id = uuid();
    this.users.push({
      id,
      ...user,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return { id };
  }
  async update(id: string, data: any) {
    const user = this.findOne({ id })[0];
    const updateAddress = async (data: any, user: any) => {
      if (data.zipcode && data.zipcode !== user.zipcode) {
        const addr = await GetAddress(data.zipcode);
        return {
          zipcode: data.zipcode,
          street: addr.street,
          neighborhood: addr.neighborhood,
          city: addr.city,
          state: addr.state,
        };
      }
      return {
        zipcode: user.zipcode,
        street:
          data.street && data.street !== user.street
            ? data.street
            : user.street,
        neighborhood:
          data.neighborhood && data.neighborhood !== user.neighborhood
            ? data.neighborhood
            : user.neighborhood,
        city: data.city && data.city !== user.city ? data.city : user.city,
        state:
          data.state && data.state !== user.state ? data.state : user.state,
      };
    };
    const addressData = await updateAddress(data, user);

    const newUser = {
      id: user.id,
      name: data.name && data.name !== user.name ? data.name : user.name,
      birthdate:
        data.birthdate && data.birthdate !== user.birthdate
          ? data.birthdate
          : user.birthdate,
      document:
        data.document && data.document !== user.document
          ? data.document
          : user.document,
      acceptedTerms:
        data.acceptedTerms && data.acceptedTerms !== user.acceptedTerms
          ? data.acceptedTerms
          : user.acceptedTerms,
      zipcode: addressData.zipcode,
      street: addressData.street,
      neighborhood: addressData.neighborhood,
      city: addressData.city,
      state: addressData.state,
      createdAt: user.createdAt,
      updatedAt: new Date().toISOString(),
    };
    console.log({ user, data, newUser });
    this.users = this.users.map((user) => (user.id === id ? newUser : user));
  }
  delete(id: string) {
    const user = this.findOne({ id })[0];
    if (!user) return false;
    this.users = this.users.filter((user) => user.id !== id);
    return true;
  }
}
