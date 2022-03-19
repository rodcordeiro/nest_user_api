export interface iUser {
  id: string;
  name: string;
  birthdate: Date;
  document: string;
  acceptedTerms: boolean;
  zipcode: number;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  createdAt: Date;
  updatedAt: Date;
}
