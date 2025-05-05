import { walletOptions, supportedChains } from './walletConfig'

// In your connection component
function WalletConnect() {
  const [activeUser, setActiveUser] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const connectWallet = async (walletType) => {
    try {
      const wallet = walletOptions[walletType]
      const users = await wallet.connect(supportedChains)
      if (users && users.length) {
        setActiveUser(users[0])
        // Store user session
        localStorage.setItem('walletConnected', walletType)
      }
    } catch (error) {
      console.error('Wallet connection error:', error)
    }
  }

  const disconnectWallet = () => {
    if (activeUser && activeUser.logout) {
      activeUser.logout()
    }
    setActiveUser(null)
    localStorage.removeItem('walletConnected')
  }

  return (
    <div className="wallet-connect">
      {!activeUser ? (
        <button onClick={() => setShowModal(true)}>Connect Wallet</button>
      ) : (
        <div>
          <span>Connected: {activeUser.accountName}</span>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      )}

      {showModal && (
        <div className="wallet-modal">
          <h3>Select Wallet</h3>
          <button onClick={() => connectWallet('wax')}>
            <img src="wax-cloud-wallet-logo.png" alt="WAX Cloud Wallet" />
            WAX Cloud Wallet
          </button>
          <button onClick={() => connectWallet('anchor')}>
            <img src="anchor-wallet-logo.png" alt="Anchor Wallet" />
            Anchor Wallet
          </button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}
    </div>
  )
}
