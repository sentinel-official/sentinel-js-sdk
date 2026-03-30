import type { NextPage } from 'next'
import { NodeSubscription } from '../components/NodeSubscription'

const Home: NextPage = () => {
  // https://github.com/cosmos/chain-registry/blob/master/sentinel/chain.json
  // we need a rpc without CORS restriction
  return <NodeSubscription
    rpcUrl="https://rpc.trinitystake.io:443" />
  }

export default Home
