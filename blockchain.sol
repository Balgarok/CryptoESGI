pragma solidity >0.4.99;

contract Trading{
    uint8 public amountInitial=100;
    uint256 timer=3600;
    uint256 timerFin;
    address payable[] public players;
    struct Player {
      uint256 amountBet;

   }

    function createCompetition(uint8 _amountInitial) public {


    }
    function runCompetition() public {
        //timerFin = Date.now() + dureeCompet;
        for (uint256 i = 1; i < players.length; i++) {
            players[i].amountBet += amountInitial;
        }
    }
    function ajoutAmount(Player p, uint256 amount) public {}
    function getResults() public {

    }
    function getWinPrice() view public returns (uint256) {

    }

}
