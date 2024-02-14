import type { NextPage } from 'next'
import { FaucetSender } from '../components/FaucetSender'

const Home: NextPage = () => {
  // https://github.com/cosmos/chain-registry/blob/master/sentinel/chain.json
  // we need a rpc without CORS restriction
  return <FaucetSender
    faucetAddress="sent-someone123"
    rpcUrl="https://rpc.sentinel.quokkastake.io" />
  }

export default Home
