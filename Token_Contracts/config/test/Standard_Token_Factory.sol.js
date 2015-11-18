"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Standard_Token_Factory = (function (_Pudding) {
    _inherits(Standard_Token_Factory, _Pudding);

    function Standard_Token_Factory() {
      _classCallCheck(this, Standard_Token_Factory);

      _get(Object.getPrototypeOf(Standard_Token_Factory.prototype), "constructor", this).apply(this, arguments);
    }

    return Standard_Token_Factory;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Standard_Token_Factory.abi = [{ "constant": false, "inputs": [{ "name": "_initialAmount", "type": "uint256" }], "name": "createStandardToken", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "name": "created", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "createdByMe", "outputs": [{ "name": "", "type": "address[]" }], "type": "function" }];
  Standard_Token_Factory.binary = "60606040526107c8806100126000396000f3606060405260e060020a600035046305215b2f81146100315780635f8dead314610106578063dc3f65d314610142575b005b6101be6004356000600060006000846040516104fc806102cc833901908152604051908190036020019082f0925082915081600160a060020a031663a9059cbb33876040518360e060020a0281526004018083600160a060020a03168152602001828152602001925050506020604051808303816000876161da5a03f11561000257505050600160a060020a033316815260208190526040812080546001810180835591908290801582901161022557828552602085206102259181019083015b808211156102bb57600081556001016100f2565b6101be60043560243560006020819052828152604090208054829081101561000257506000908152602090200154600160a060020a0316905081565b6040805160208181018352600080835233600160a060020a0316815280825283902080548451818402810184019095528085526101db94928301828280156101b457602002820191906000526020600020905b8154600160a060020a0316815260019190910190602001808311610195575b5050505050905090565b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b505050600160a060020a033316600090815260208190526040902080549192508491600019840190811015610002576040600090812092815260208120909101805473ffffffffffffffffffffffffffffffffffffffff191690931790925533600160a060020a03169091528054828255829190829080158290116102bf576000838152602090206102bf9181019083016100f2565b5090565b50949796505050505050505660606040526040516020806104fc833950608060405251600160a060020a03331660009081526020819052604090208190556003819055506104b7806100456000396000f3606060405236156100775760e060020a600035046318160ddd8114610079578063181670e6146100875780631fa03a2b146100bd57806323b872dd146100f457806370a0823114610150578063930b7a2314610175578063a9059cbb146101dd578063daea85c514610261578063fbf1f78a146102cc575b005b6003545b6060908152602090f35b61007d600435602435600160a060020a038083166000908152600260209081526040808320938516835292905220545b92915050565b61007d600435602435600160a060020a0380831660009081526001602090815260408083209385168352929052205460ff166100b7565b61007d600435602435604435600160a060020a03831660009081526020819052604081205481908390106104aa57600160209081526040808320600160a060020a033316845290915281205460ff161561037c575060016103f3565b61007d600435600160a060020a0381166000908152602081905260409020545b919050565b61007d600435602435600160a060020a03338116600081815260026020908152604080832094871680845294825282208590556060858152919392917fcc92c05edef6bc5dcdfab43862409620fd81888eec1be99935f19375c4ef704e9190a35060016100b7565b61007d600435602435600160a060020a0333166000908152602081905260408120548290106104b257604080822080548490039055600160a060020a03808516808452918320805485019055606084815233909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a35060016100b7565b61007d600435600160a060020a0333811660008181526001602081815260408084209587168085529582528320805460ff1916831790556060918252919392917f0e40f4b0b06b7d270eb92aed48caf256e6bbe4f83c5492e7433958cf5566192091a3506001610170565b61007d600435600160a060020a033381166000818152600160209081526040808320948616808452948252808320805460ff1916905583835260028252808320858452825282208290556060828152919392917f0e40f4b0b06b7d270eb92aed48caf256e6bbe4f83c5492e7433958cf556619209190a3600160a060020a038083169033167fcc92c05edef6bc5dcdfab43862409620fd81888eec1be99935f19375c4ef704e60206060a3919050565b600160a060020a03808616825260026020908152604080842033909316845291905281205483116103f35760019050805060006002600050600087600160a060020a03168152602001908152602001600020600050600033600160a060020a03168152602001908152602001600020600050819055505b80600114156104aa57826000600050600087600160a060020a03168152602001908152602001600020600082828250540392505081905550826000600050600086600160a060020a0316815260200190815260200160002060008282825054019250508190555083600160a060020a031685600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3600191505b509392505050565b6100b756";

  if ("" != "") {
    Standard_Token_Factory.address = "";

    // Backward compatibility; Deprecated.
    Standard_Token_Factory.deployed_address = "";
  }

  Standard_Token_Factory.generated_with = "1.0.2";
  Standard_Token_Factory.contract_name = "Standard_Token_Factory";

  return Standard_Token_Factory;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Standard_Token_Factory = factory;
}