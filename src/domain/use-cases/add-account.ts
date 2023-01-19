import { AccountModel } from '../model/account'

export interface addAccountModel {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add (account: addAccountModel): Promise<AccountModel>

}
