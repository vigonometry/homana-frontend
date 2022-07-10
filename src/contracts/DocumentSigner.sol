// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

contract DocumentSigner {
    address[] private admins = [0xA9bd3AF1e346b915a5D052070301Dcf5b3D3465A];

    mapping(uint256 => Document) private documents; //convert to string mapping with oid
    mapping(uint256 => Claim) private claims;

    uint256[] private documentId; //convert to string mapping with oid
    uint256[] private cId; //convert to string mapping with oid
    uint256 private docuId = 0; //remove
    uint256 private claimId = 0; //remove

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

    function signDocumentClient(uint256 _docuId) public {
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

    function rejectDocument(uint256 _docuId) public onlyAdmins {
        documents[_docuId].broker = msg.sender;
        documents[_docuId].status = Status.REJECTED;
    }

    function approveDocument(uint256 _docuId) public onlyAdmins {
        documents[_docuId].broker = msg.sender;
        documents[_docuId].status = Status.APPROVED;
    }

    function createDocument() public {
        documents[docuId] = Document(
            msg.sender,
            address(0),
            address(0),
            Status.QUOTED
        );
        documentId.push(docuId);
        docuId++;
    }

    function createClaim() public {
        claims[claimId] = Claim(msg.sender, address(0), ClaimStatus.APPLIED);
        cId.push(claimId);
        claimId++;
    }

    function rejectClaim(uint256 _claimId) public onlyAdmins {
        claims[_claimId].broker = msg.sender;
        claims[_claimId].cStatus = ClaimStatus.REJECTED;
    }

    function approveClaim(uint256 _claimId) public onlyAdmins {
        claims[_claimId].broker = msg.sender;
        claims[_claimId].cStatus = ClaimStatus.APPROVED;
    }

    function getSignatoriesDocument(uint256 _docuId)
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

    function getStatusDocument(uint256 _docuId)
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

    function getSignatoriesClaim(uint256 _claimId)
        public
        view
        returns (address[2] memory)
    {
        return [claims[_claimId].client, claims[_claimId].broker];
    }

    function getStatusClaim(uint256 _claimId)
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
