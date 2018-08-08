import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'

class Home extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h2>Active Account</h2>
            <AccountData accountIndex="0" units="ether" precision="3" />

            <br/><br/>
          </div>

          <div className="pure-u-1-1">
            <h2>PeerPoint</h2>
            <p><strong>Sent</strong>: <ContractData contract="PeerPoint" method="sent" methodArgs={[this.props.accounts[0]]}/></p>
            <p><strong>Received</strong>: <ContractData contract="PeerPoint" method="received" methodArgs={[this.props.accounts[0]]}/></p>
            <p><strong>Available</strong>: <ContractData contract="PeerPoint" method="available" methodArgs={[this.props.accounts[0]]}/></p>
            <div>
              <h3>Redeem</h3>
              <ContractForm contract="PeerPoint" method="redeem">Redeem</ContractForm>
            </div>
            <div>
              <h3>Send Point</h3>
              <ContractForm contract="PeerPoint" method="sendPoint">Redeem</ContractForm>
            </div>
            <br/><br/>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
