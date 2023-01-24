import { AccountModel } from '../../../domain/model/account'
import { AddAccount, addAccountModel } from '../../../domain/use-cases/add-account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAccount {
    private readonly encrypter: Encrypter
    constructor (encrypter: Encrypter) {
      this.encrypter = encrypter
    }

    async add (account: addAccountModel): Promise<AccountModel> {
      await this.encrypter.encrypt(account.password)
      return new Promise(resolve => resolve({
        id: '',
        name: '',
        email: '',
        password: ''
      }))
    }
}
