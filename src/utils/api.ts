import axios, { AxiosResponse } from 'axios';
import { iAddressData } from './interfaces';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export async function GetAddress(zip: string) {
  return await api
    .get(`${zip}/json`)
    .then((response: AxiosResponse<iAddressData>) => ({
      street: response.data.logradouro,
      neighborhood: response.data.bairro,
      city: response.data.localidade,
      state: response.data.uf,
    }));
}
