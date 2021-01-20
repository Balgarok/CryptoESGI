// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MarketPlace{
    uint public itemCount = 0;
    mapping (uint => Realty) public realties;
    struct Other{
        string title;
        string info;
    }
    struct Realty {
        uint id;
        string title;
        string description;
        uint price;
        address payable owner;
        bool purchased;
        string location;
        uint256 size;
        uint nbRoom;
        uint nbBedroom;
        string pictureUrl;
        //Other[] others;
    
    }
    event RealtyCreated(
        uint id,
        string title,
        string description,
        uint price,
        address payable owner,
        bool purchased,
        string location,
        uint256 size,
        uint nbRoom,
        uint nbBedroom,
        string pictureUrl//,
        //Other[] others
    );

    event RealtySelled(
        uint id,
        string title,
        string description,
        uint price,
        address payable owner,
        bool purchased,
        string location,
        uint256 size,
        uint nbRoom,
        uint nbBedroom,
        string pictureUrl
        //Other[] others
    );

    function sell(string memory _title, string memory _description, string memory _location, uint _size, uint _nbRoom, uint _nbBedroom, uint _price, string memory _pictureUrl) public {
        require(bytes(_title).length > 0);
        require(_price > 0);
        itemCount++;
        //realties.size
        realties[itemCount] = Realty(itemCount, _title, _description, _price, msg.sender, false, _location, _size, _nbRoom, _nbBedroom, _pictureUrl);
        emit RealtyCreated(itemCount, _title, _description, _price, msg.sender, false, _location, _size, _nbRoom, _nbBedroom, _pictureUrl);

    }
    function purchase(uint _id) public payable {
        Realty memory _realty = realties[_id];
        // Fetch the Owner
        address payable _seller = _realty.owner;
        require(_realty.id > 0);
        require(msg.value >= _realty.price);
        // Check the realty not be purchased before
        require(!_realty.purchased);
        require(_seller != msg.sender, "Seller can't buy his own realty");
        // Transfer the ownership to buyer
        _realty.owner = msg.sender;
        _realty.purchased = true;
        //delete realties[_id];
        realties[_id] = _realty;
        // Pay the seller
        address(uint160(_seller)).transfer(msg.value);
        // Trigger the event        
        emit RealtySelled(_realty.id, _realty.title, _realty.description, _realty.price, _realty.owner, _realty.purchased, _realty.location, _realty.size, _realty.nbRoom, _realty.nbBedroom, _realty.pictureUrl);
    }

}