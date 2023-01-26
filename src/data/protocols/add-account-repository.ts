import { AccountModel } from '../../domain/model/account'
import { addAccountModel } from '../../domain/use-cases/add-account'

export interface AddAccountRepository {
  add (accountData: addAccountModel): Promise<AccountModel>

}
