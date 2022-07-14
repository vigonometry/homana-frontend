// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

contract DocumentSigner {
    address[] private admins = [0x7BfA0Bc3a7863d99130904E5E4E2eBE6869D08A4];

    mapping(string => Document) private documents; //convert to string mapping with oid
    mapping(string => Claim) private claims;


    enum Status {
        QUOTED,
        APPLIED,
        PROGRESS,
        APPROVED,
        REJECTED
    } //add other statuses {QUOTED, APPLIED}

    enum ClaimStatus {
        APPLIED,
        PROGRESS,
        APPROVED,
        REJECTED
    }

    struct Document {
        address agent;
        address client;
        address broker;
        Status status;
    }

    struct Claim {
        address client;
        address broker;
        ClaimStatus cStatus;
    }

    function signDocumentClient(string memory _docuId) public {
        documents[_docuId].client = msg.sender;
        documents[_docuId].status = Status.APPLIED;
    }

    modifier onlyAdmins() {
        bool isAdmin = false;
        for (uint64 i = 0; i < admins.length; ++i) {
            if (msg.sender == admins[i]) {
                isAdmin = true;
                break;
            }
        }

        require(isAdmin, "User is not an admin!");
        _;
    }

    function rejectDocument(string memory _docuId) public onlyAdmins {
        documents[_docuId].broker = msg.sender;
        documents[_docuId].status = Status.REJECTED;
    }

    function rejectDocumentClient(string memory _docuId) public {
        documents[_docuId].client = msg.sender;
        documents[_docuId].status = Status.REJECTED;
    }

    function approveDocument(string memory _docuId) public onlyAdmins {
        documents[_docuId].broker = msg.sender;
        documents[_docuId].status = Status.APPROVED;
    }

    function createDocument(string memory _docuId) public {
        documents[_docuId] = Document(
            msg.sender,
            address(0),
            address(0),
            Status.QUOTED
        );
    }

    function createClaim(string memory _claimId) public {
        claims[_claimId] = Claim(msg.sender, address(0), ClaimStatus.APPLIED);
    }

    function rejectClaim(string memory _claimId) public onlyAdmins {
        claims[_claimId].broker = msg.sender;
        claims[_claimId].cStatus = ClaimStatus.REJECTED;
    }

    function approveClaim(string memory _claimId) public onlyAdmins {
        claims[_claimId].broker = msg.sender;
        claims[_claimId].cStatus = ClaimStatus.APPROVED;
    }

    function getSignatoriesDocument(string memory _docuId)
        public
        view
        returns (address[3] memory)
    {
        return [
            documents[_docuId].agent,
            documents[_docuId].client,
            documents[_docuId].broker
        ];
    }

    function getStatusDocument(string memory _docuId)
        public
        view
        returns (string memory)
    {
        string[5] memory statuses = [
            "Quoted",
            "Applied",
            "In progress",
            "Approved",
            "Rejected"
        ];
        uint256 statusIdx = uint256(documents[_docuId].status);
        return statuses[statusIdx];
    }

    function getSignatoriesClaim(string memory _claimId)
        public
        view
        returns (address[2] memory)
    {
        return [claims[_claimId].client, claims[_claimId].broker];
    }

    function getStatusClaim(string memory _claimId)
        public
        view
        returns (string memory)
    {
        string[4] memory statuses = [
            "Applied",
            "In progress",
            "Approved",
            "Rejected"
        ];
        uint256 statusIdx = uint256(claims[_claimId].cStatus);
        return statuses[statusIdx];
    }
}
