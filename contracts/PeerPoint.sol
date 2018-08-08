pragma solidity ^0.4.23;

library SafeMath {
    function add(uint256 a, uint256 b) internal pure returns (uint256 c) {
        c = a + b;
        require(c >= a);
    }
    function sub(uint256 a, uint256 b) internal pure returns (uint256 c) {
        require(b <= a);
        c = a - b;
    }
    function mul(uint256 a, uint256 b) internal pure returns (uint256 c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }
    function div(uint256 a, uint256 b) internal pure returns (uint256 c) {
        require(b > 0);
        c = a / b;
    }
}

contract PeerPoint {
    using SafeMath for uint256;
    mapping (address => uint256) public sent;
    mapping (address => uint256) public received;
    mapping (address => uint256) public available;
    mapping (address => uint256) public nextRedeemableTimes;
    uint256 public redeemableAmount;

    event SentPoint(address indexed _from, address indexed _to, uint256 _value, string _message);

    constructor () public {
        redeemableAmount = 400;
    }

    modifier updatePoints {
        if (now >= nextRedeemableTimes[msg.sender]) {
            redeem();
        }
        _;
    }

    function sendPoint(address _to, uint256 _value, string _message)
        public
        updatePoints
        returns (bool success)
    {
        require(_to != address(0));
        require(_to != msg.sender);
        require(_value <= available[msg.sender]);
        sent[msg.sender] = sent[msg.sender].add(_value);
        available[msg.sender] = available[msg.sender].sub(_value);
        received[_to] = received[_to].add(_value);
        emit SentPoint(msg.sender, _to, _value, _message);
        return true;
    }

    function redeem() public returns (uint256 point, uint256 nextRedeemableTime) {
        if (now >= nextRedeemableTimes[msg.sender] ) {
            available[msg.sender] = redeemableAmount;
            nextRedeemableTimes[msg.sender] = now.sub(now % (1 days)).add(7 days);
        }
        return (available[msg.sender], nextRedeemableTimes[msg.sender]);
    }
}
