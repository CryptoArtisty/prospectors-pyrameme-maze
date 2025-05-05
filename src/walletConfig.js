import { Anchor } from '@eosdacio/ual-anchor'
import { Wax } from '@eosdacio/ual-wax-cloud-wallet'
import { AnchorLink } from 'anchor-link'
import { AnchorLinkBrowserTransport } from 'anchor-link-browser-transport'

// WAX Cloud Wallet configuration
const waxCloudWallet = new Wax({
  rpcEndpoints: [
    {
      protocol: 'https',
      host: 'wax.greymass.com',
      port: 443
    }
  ]
})

// Anchor Wallet configuration
const anchorLink = new AnchorLink({
  transport: new AnchorLinkBrowserTransport(),
  service: 'https://prospectors-pyrameme-maze.com' // Your game's URL
})

const anchorWallet = new Anchor(
  [
    {
      protocol: 'https',
      host: 'wax.greymass.com',
      port: 443
    }
  ],
  { anchorLink }
)

export const walletOptions = {
  wax: waxCloudWallet,
  anchor: anchorWallet
}

export const supportedChains = [
  {
    chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
    rpcEndpoints: [
      {
        protocol: 'https',
        host: 'wax.greymass.com',
        port: 443
      }
    ]
  }
]
