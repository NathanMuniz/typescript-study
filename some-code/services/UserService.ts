

export class UserServiceIpm implements UserService {

  private web3Provider: Web3Provider;
  private config: Config;

  constructor({ web3Provider, config }: { web3Provider: Web3Provider; config: Config }) {
    this.web3Provider = web3Provider
    this.config = config
  }

  public async getAddressEnsName(props: GetAddressEnsNameProps) {
    const { address } = props;
    const provider = this.web3Provider.getInstaceOf('etherum');
    const addressEnsName = await provider.loookupAddres
    const addressEnsNmae;
  }

  public async getNftBalance(address: string): Promise<NftBalaces> {
    const bluePillNtfBalacne = await this.getBluePillNftBalance(address);
    const woofyNftBalance = await this.get
  }




}
