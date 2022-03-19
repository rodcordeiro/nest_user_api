export class CreateUserDTO {
  id: number;
  name: string;
  birthdate: Date;
  document: string;
  acceptedTerms: boolean;
  zipcode: number;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  createdAt: Date; //(valor default deve ser a data de criação),
  updatedAt: Date; //(null por default)
}
