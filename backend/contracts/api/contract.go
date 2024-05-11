// Code generated - DO NOT EDIT.
// This file is a generated binding and any manual changes will be lost.

package api

import (
	"errors"
	"math/big"
	"strings"

	ethereum "github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/event"
)

// Reference imports to suppress errors if they are not otherwise used.
var (
	_ = errors.New
	_ = big.NewInt
	_ = strings.NewReader
	_ = ethereum.NotFound
	_ = bind.Bind
	_ = common.Big1
	_ = types.BloomLookup
	_ = event.NewSubscription
	_ = abi.ConvertType
)

// StartupActivityTrackerActivity is an auto generated low-level Go binding around an user-defined struct.
type StartupActivityTrackerActivity struct {
	Title        string
	Description  string
	Date         *big.Int
	ActivityType string
}

// StartupActivityTrackerStartup is an auto generated low-level Go binding around an user-defined struct.
type StartupActivityTrackerStartup struct {
	Name            string
	Founder         common.Address
	ActivityIndices []*big.Int
}

// ApiMetaData contains all meta data concerning the Api contract.
var ApiMetaData = &bind.MetaData{
	ABI: "[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"founder\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"date\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"activityType\",\"type\":\"string\"}],\"name\":\"ActivityAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"founder\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"StartupRegistered\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"date\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"activityType\",\"type\":\"string\"}],\"name\":\"addActivity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getActivity\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"date\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"activityType\",\"type\":\"string\"}],\"internalType\":\"structStartupActivityTracker.Activity\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"founder\",\"type\":\"address\"}],\"name\":\"getStartup\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"founder\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"activityIndices\",\"type\":\"uint256[]\"}],\"internalType\":\"structStartupActivityTracker.Startup\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"registerStartup\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
	Bin: "0x6080604052348015600e575f80fd5b50610b8a8061001c5f395ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c80634ed943db1461004e578063922635d814610063578063c6fa59921461008c578063fe74e3b3146100ac575b5f80fd5b61006161005c366004610789565b6100bf565b005b6100766100713660046107c3565b61020a565b6040516100839190610808565b60405180910390f35b61009f61009a366004610872565b61040c565b604051610083919061089f565b6100616100ba36600461091a565b610544565b335f908152602081905260409020600101546001600160a01b03161561012c5760405162461bcd60e51b815260206004820152601a60248201527f5374617274757020616c7265616479207265676973746572656400000000000060448201526064015b60405180910390fd5b604080516060810182528281523360208201529081015f60405190808252806020026020018201604052801561016c578160200160208202803683370190505b509052335f9081526020819052604090208151819061018b9082610a2a565b506020828101516001830180546001600160a01b0319166001600160a01b03909216919091179055604083015180516101ca926002850192019061068f565b50506040513391507fee0f37ff49ffabe8e616c291af6ae8f83b33c79e076eae8f4ae1519f052ae322906101ff908490610aea565b60405180910390a250565b610234604051806080016040528060608152602001606081526020015f8152602001606081525090565b5f828152600160205260409081902081516080810190925280548290829061025b906109a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610287906109a6565b80156102d25780601f106102a9576101008083540402835291602001916102d2565b820191905f5260205f20905b8154815290600101906020018083116102b557829003601f168201915b505050505081526020016001820180546102eb906109a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610317906109a6565b80156103625780601f1061033957610100808354040283529160200191610362565b820191905f5260205f20905b81548152906001019060200180831161034557829003601f168201915b5050505050815260200160028201548152602001600382018054610385906109a6565b80601f01602080910402602001604051908101604052809291908181526020018280546103b1906109a6565b80156103fc5780601f106103d3576101008083540402835291602001916103fc565b820191905f5260205f20905b8154815290600101906020018083116103df57829003601f168201915b5050505050815250509050919050565b60408051606080820183528082525f6020830152918101919091526001600160a01b0382165f9081526020819052604090819020815160608101909252805482908290610458906109a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610484906109a6565b80156104cf5780601f106104a6576101008083540402835291602001916104cf565b820191905f5260205f20905b8154815290600101906020018083116104b257829003601f168201915b505050918352505060018201546001600160a01b031660208083019190915260028301805460408051828502810185018252828152940193928301828280156103fc57602002820191905f5260205f20905b815481526020019060010190808311610521575050505050815250509050919050565b335f90815260208190526040902060018101546001600160a01b03166105a55760405162461bcd60e51b815260206004820152601660248201527514dd185c9d1d5c081b9bdd081c9959da5cdd195c995960521b6044820152606401610123565b604080516080810182528681526020808201879052818301869052606082018590526002545f908152600190915291909120815181906105e59082610a2a565b50602082015160018201906105fa9082610a2a565b5060408201516002820155606082015160038201906106199082610a2a565b50506002805490830180546001810182555f918252602090912001555060405133907ff2bd8b33a8042352f85cadf2d186059d9a93440b1a7951d717d53e2c73c7be019061066c90889087908790610afc565b60405180910390a260028054905f61068383610b30565b91905055505050505050565b828054828255905f5260205f209081019282156106c8579160200282015b828111156106c85782518255916020019190600101906106ad565b506106d49291506106d8565b5090565b5b808211156106d4575f81556001016106d9565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011261070f575f80fd5b813567ffffffffffffffff8082111561072a5761072a6106ec565b604051601f8301601f19908116603f01168101908282118183101715610752576107526106ec565b8160405283815286602085880101111561076a575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f60208284031215610799575f80fd5b813567ffffffffffffffff8111156107af575f80fd5b6107bb84828501610700565b949350505050565b5f602082840312156107d3575f80fd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f82516080602084015261082360a08401826107da565b90506020840151601f198085840301604086015261084183836107da565b92506040860151606086015260608601519150808584030160808601525061086982826107da565b95945050505050565b5f60208284031215610882575f80fd5b81356001600160a01b0381168114610898575f80fd5b9392505050565b5f602080835283516060828501526108ba60808501826107da565b858301516001600160a01b0316604086810191909152860151858203601f19016060870152805180835290840192505f918401905b8083101561090f57835182529284019260019290920191908401906108ef565b509695505050505050565b5f805f806080858703121561092d575f80fd5b843567ffffffffffffffff80821115610944575f80fd5b61095088838901610700565b95506020870135915080821115610965575f80fd5b61097188838901610700565b945060408701359350606087013591508082111561098d575f80fd5b5061099a87828801610700565b91505092959194509250565b600181811c908216806109ba57607f821691505b6020821081036109d857634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115610a2557805f5260205f20601f840160051c81016020851015610a035750805b601f840160051c820191505b81811015610a22575f8155600101610a0f565b50505b505050565b815167ffffffffffffffff811115610a4457610a446106ec565b610a5881610a5284546109a6565b846109de565b602080601f831160018114610a8b575f8415610a745750858301515b5f19600386901b1c1916600185901b178555610ae2565b5f85815260208120601f198616915b82811015610ab957888601518255948401946001909101908401610a9a565b5085821015610ad657878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b602081525f61089860208301846107da565b606081525f610b0e60608301866107da565b8460208401528281036040840152610b2681856107da565b9695505050505050565b5f60018201610b4d57634e487b7160e01b5f52601160045260245ffd5b506001019056fea26469706673582212208adcd921ec2c5f6b49acdddd2453483f450c8df99508ff2f9ab9c4df57d3e2b364736f6c63430008190033",
}

// ApiABI is the input ABI used to generate the binding from.
// Deprecated: Use ApiMetaData.ABI instead.
var ApiABI = ApiMetaData.ABI

// ApiBin is the compiled bytecode used for deploying new contracts.
// Deprecated: Use ApiMetaData.Bin instead.
var ApiBin = ApiMetaData.Bin

// DeployApi deploys a new Ethereum contract, binding an instance of Api to it.
func DeployApi(auth *bind.TransactOpts, backend bind.ContractBackend) (common.Address, *types.Transaction, *Api, error) {
	parsed, err := ApiMetaData.GetAbi()
	if err != nil {
		return common.Address{}, nil, nil, err
	}
	if parsed == nil {
		return common.Address{}, nil, nil, errors.New("GetABI returned nil")
	}

	address, tx, contract, err := bind.DeployContract(auth, *parsed, common.FromHex(ApiBin), backend)
	if err != nil {
		return common.Address{}, nil, nil, err
	}
	return address, tx, &Api{ApiCaller: ApiCaller{contract: contract}, ApiTransactor: ApiTransactor{contract: contract}, ApiFilterer: ApiFilterer{contract: contract}}, nil
}

// Api is an auto generated Go binding around an Ethereum contract.
type Api struct {
	ApiCaller     // Read-only binding to the contract
	ApiTransactor // Write-only binding to the contract
	ApiFilterer   // Log filterer for contract events
}

// ApiCaller is an auto generated read-only Go binding around an Ethereum contract.
type ApiCaller struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// ApiTransactor is an auto generated write-only Go binding around an Ethereum contract.
type ApiTransactor struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// ApiFilterer is an auto generated log filtering Go binding around an Ethereum contract events.
type ApiFilterer struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// ApiSession is an auto generated Go binding around an Ethereum contract,
// with pre-set call and transact options.
type ApiSession struct {
	Contract     *Api              // Generic contract binding to set the session for
	CallOpts     bind.CallOpts     // Call options to use throughout this session
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// ApiCallerSession is an auto generated read-only Go binding around an Ethereum contract,
// with pre-set call options.
type ApiCallerSession struct {
	Contract *ApiCaller    // Generic contract caller binding to set the session for
	CallOpts bind.CallOpts // Call options to use throughout this session
}

// ApiTransactorSession is an auto generated write-only Go binding around an Ethereum contract,
// with pre-set transact options.
type ApiTransactorSession struct {
	Contract     *ApiTransactor    // Generic contract transactor binding to set the session for
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// ApiRaw is an auto generated low-level Go binding around an Ethereum contract.
type ApiRaw struct {
	Contract *Api // Generic contract binding to access the raw methods on
}

// ApiCallerRaw is an auto generated low-level read-only Go binding around an Ethereum contract.
type ApiCallerRaw struct {
	Contract *ApiCaller // Generic read-only contract binding to access the raw methods on
}

// ApiTransactorRaw is an auto generated low-level write-only Go binding around an Ethereum contract.
type ApiTransactorRaw struct {
	Contract *ApiTransactor // Generic write-only contract binding to access the raw methods on
}

// NewApi creates a new instance of Api, bound to a specific deployed contract.
func NewApi(address common.Address, backend bind.ContractBackend) (*Api, error) {
	contract, err := bindApi(address, backend, backend, backend)
	if err != nil {
		return nil, err
	}
	return &Api{ApiCaller: ApiCaller{contract: contract}, ApiTransactor: ApiTransactor{contract: contract}, ApiFilterer: ApiFilterer{contract: contract}}, nil
}

// NewApiCaller creates a new read-only instance of Api, bound to a specific deployed contract.
func NewApiCaller(address common.Address, caller bind.ContractCaller) (*ApiCaller, error) {
	contract, err := bindApi(address, caller, nil, nil)
	if err != nil {
		return nil, err
	}
	return &ApiCaller{contract: contract}, nil
}

// NewApiTransactor creates a new write-only instance of Api, bound to a specific deployed contract.
func NewApiTransactor(address common.Address, transactor bind.ContractTransactor) (*ApiTransactor, error) {
	contract, err := bindApi(address, nil, transactor, nil)
	if err != nil {
		return nil, err
	}
	return &ApiTransactor{contract: contract}, nil
}

// NewApiFilterer creates a new log filterer instance of Api, bound to a specific deployed contract.
func NewApiFilterer(address common.Address, filterer bind.ContractFilterer) (*ApiFilterer, error) {
	contract, err := bindApi(address, nil, nil, filterer)
	if err != nil {
		return nil, err
	}
	return &ApiFilterer{contract: contract}, nil
}

// bindApi binds a generic wrapper to an already deployed contract.
func bindApi(address common.Address, caller bind.ContractCaller, transactor bind.ContractTransactor, filterer bind.ContractFilterer) (*bind.BoundContract, error) {
	parsed, err := ApiMetaData.GetAbi()
	if err != nil {
		return nil, err
	}
	return bind.NewBoundContract(address, *parsed, caller, transactor, filterer), nil
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_Api *ApiRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _Api.Contract.ApiCaller.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_Api *ApiRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _Api.Contract.ApiTransactor.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_Api *ApiRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _Api.Contract.ApiTransactor.contract.Transact(opts, method, params...)
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_Api *ApiCallerRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _Api.Contract.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_Api *ApiTransactorRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _Api.Contract.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_Api *ApiTransactorRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _Api.Contract.contract.Transact(opts, method, params...)
}

// GetActivity is a free data retrieval call binding the contract method 0x922635d8.
//
// Solidity: function getActivity(uint256 index) view returns((string,string,uint256,string))
func (_Api *ApiCaller) GetActivity(opts *bind.CallOpts, index *big.Int) (StartupActivityTrackerActivity, error) {
	var out []interface{}
	err := _Api.contract.Call(opts, &out, "getActivity", index)

	if err != nil {
		return *new(StartupActivityTrackerActivity), err
	}

	out0 := *abi.ConvertType(out[0], new(StartupActivityTrackerActivity)).(*StartupActivityTrackerActivity)

	return out0, err

}

// GetActivity is a free data retrieval call binding the contract method 0x922635d8.
//
// Solidity: function getActivity(uint256 index) view returns((string,string,uint256,string))
func (_Api *ApiSession) GetActivity(index *big.Int) (StartupActivityTrackerActivity, error) {
	return _Api.Contract.GetActivity(&_Api.CallOpts, index)
}

// GetActivity is a free data retrieval call binding the contract method 0x922635d8.
//
// Solidity: function getActivity(uint256 index) view returns((string,string,uint256,string))
func (_Api *ApiCallerSession) GetActivity(index *big.Int) (StartupActivityTrackerActivity, error) {
	return _Api.Contract.GetActivity(&_Api.CallOpts, index)
}

// GetStartup is a free data retrieval call binding the contract method 0xc6fa5992.
//
// Solidity: function getStartup(address founder) view returns((string,address,uint256[]))
func (_Api *ApiCaller) GetStartup(opts *bind.CallOpts, founder common.Address) (StartupActivityTrackerStartup, error) {
	var out []interface{}
	err := _Api.contract.Call(opts, &out, "getStartup", founder)

	if err != nil {
		return *new(StartupActivityTrackerStartup), err
	}

	out0 := *abi.ConvertType(out[0], new(StartupActivityTrackerStartup)).(*StartupActivityTrackerStartup)

	return out0, err

}

// GetStartup is a free data retrieval call binding the contract method 0xc6fa5992.
//
// Solidity: function getStartup(address founder) view returns((string,address,uint256[]))
func (_Api *ApiSession) GetStartup(founder common.Address) (StartupActivityTrackerStartup, error) {
	return _Api.Contract.GetStartup(&_Api.CallOpts, founder)
}

// GetStartup is a free data retrieval call binding the contract method 0xc6fa5992.
//
// Solidity: function getStartup(address founder) view returns((string,address,uint256[]))
func (_Api *ApiCallerSession) GetStartup(founder common.Address) (StartupActivityTrackerStartup, error) {
	return _Api.Contract.GetStartup(&_Api.CallOpts, founder)
}

// AddActivity is a paid mutator transaction binding the contract method 0xfe74e3b3.
//
// Solidity: function addActivity(string title, string description, uint256 date, string activityType) returns()
func (_Api *ApiTransactor) AddActivity(opts *bind.TransactOpts, title string, description string, date *big.Int, activityType string) (*types.Transaction, error) {
	return _Api.contract.Transact(opts, "addActivity", title, description, date, activityType)
}

// AddActivity is a paid mutator transaction binding the contract method 0xfe74e3b3.
//
// Solidity: function addActivity(string title, string description, uint256 date, string activityType) returns()
func (_Api *ApiSession) AddActivity(title string, description string, date *big.Int, activityType string) (*types.Transaction, error) {
	return _Api.Contract.AddActivity(&_Api.TransactOpts, title, description, date, activityType)
}

// AddActivity is a paid mutator transaction binding the contract method 0xfe74e3b3.
//
// Solidity: function addActivity(string title, string description, uint256 date, string activityType) returns()
func (_Api *ApiTransactorSession) AddActivity(title string, description string, date *big.Int, activityType string) (*types.Transaction, error) {
	return _Api.Contract.AddActivity(&_Api.TransactOpts, title, description, date, activityType)
}

// RegisterStartup is a paid mutator transaction binding the contract method 0x4ed943db.
//
// Solidity: function registerStartup(string name) returns()
func (_Api *ApiTransactor) RegisterStartup(opts *bind.TransactOpts, name string) (*types.Transaction, error) {
	return _Api.contract.Transact(opts, "registerStartup", name)
}

// RegisterStartup is a paid mutator transaction binding the contract method 0x4ed943db.
//
// Solidity: function registerStartup(string name) returns()
func (_Api *ApiSession) RegisterStartup(name string) (*types.Transaction, error) {
	return _Api.Contract.RegisterStartup(&_Api.TransactOpts, name)
}

// RegisterStartup is a paid mutator transaction binding the contract method 0x4ed943db.
//
// Solidity: function registerStartup(string name) returns()
func (_Api *ApiTransactorSession) RegisterStartup(name string) (*types.Transaction, error) {
	return _Api.Contract.RegisterStartup(&_Api.TransactOpts, name)
}

// ApiActivityAddedIterator is returned from FilterActivityAdded and is used to iterate over the raw logs and unpacked data for ActivityAdded events raised by the Api contract.
type ApiActivityAddedIterator struct {
	Event *ApiActivityAdded // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *ApiActivityAddedIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(ApiActivityAdded)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(ApiActivityAdded)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *ApiActivityAddedIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *ApiActivityAddedIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// ApiActivityAdded represents a ActivityAdded event raised by the Api contract.
type ApiActivityAdded struct {
	Founder      common.Address
	Title        string
	Date         *big.Int
	ActivityType string
	Raw          types.Log // Blockchain specific contextual infos
}

// FilterActivityAdded is a free log retrieval operation binding the contract event 0xf2bd8b33a8042352f85cadf2d186059d9a93440b1a7951d717d53e2c73c7be01.
//
// Solidity: event ActivityAdded(address indexed founder, string title, uint256 date, string activityType)
func (_Api *ApiFilterer) FilterActivityAdded(opts *bind.FilterOpts, founder []common.Address) (*ApiActivityAddedIterator, error) {

	var founderRule []interface{}
	for _, founderItem := range founder {
		founderRule = append(founderRule, founderItem)
	}

	logs, sub, err := _Api.contract.FilterLogs(opts, "ActivityAdded", founderRule)
	if err != nil {
		return nil, err
	}
	return &ApiActivityAddedIterator{contract: _Api.contract, event: "ActivityAdded", logs: logs, sub: sub}, nil
}

// WatchActivityAdded is a free log subscription operation binding the contract event 0xf2bd8b33a8042352f85cadf2d186059d9a93440b1a7951d717d53e2c73c7be01.
//
// Solidity: event ActivityAdded(address indexed founder, string title, uint256 date, string activityType)
func (_Api *ApiFilterer) WatchActivityAdded(opts *bind.WatchOpts, sink chan<- *ApiActivityAdded, founder []common.Address) (event.Subscription, error) {

	var founderRule []interface{}
	for _, founderItem := range founder {
		founderRule = append(founderRule, founderItem)
	}

	logs, sub, err := _Api.contract.WatchLogs(opts, "ActivityAdded", founderRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(ApiActivityAdded)
				if err := _Api.contract.UnpackLog(event, "ActivityAdded", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseActivityAdded is a log parse operation binding the contract event 0xf2bd8b33a8042352f85cadf2d186059d9a93440b1a7951d717d53e2c73c7be01.
//
// Solidity: event ActivityAdded(address indexed founder, string title, uint256 date, string activityType)
func (_Api *ApiFilterer) ParseActivityAdded(log types.Log) (*ApiActivityAdded, error) {
	event := new(ApiActivityAdded)
	if err := _Api.contract.UnpackLog(event, "ActivityAdded", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}

// ApiStartupRegisteredIterator is returned from FilterStartupRegistered and is used to iterate over the raw logs and unpacked data for StartupRegistered events raised by the Api contract.
type ApiStartupRegisteredIterator struct {
	Event *ApiStartupRegistered // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *ApiStartupRegisteredIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(ApiStartupRegistered)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(ApiStartupRegistered)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *ApiStartupRegisteredIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *ApiStartupRegisteredIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// ApiStartupRegistered represents a StartupRegistered event raised by the Api contract.
type ApiStartupRegistered struct {
	Founder common.Address
	Name    string
	Raw     types.Log // Blockchain specific contextual infos
}

// FilterStartupRegistered is a free log retrieval operation binding the contract event 0xee0f37ff49ffabe8e616c291af6ae8f83b33c79e076eae8f4ae1519f052ae322.
//
// Solidity: event StartupRegistered(address indexed founder, string name)
func (_Api *ApiFilterer) FilterStartupRegistered(opts *bind.FilterOpts, founder []common.Address) (*ApiStartupRegisteredIterator, error) {

	var founderRule []interface{}
	for _, founderItem := range founder {
		founderRule = append(founderRule, founderItem)
	}

	logs, sub, err := _Api.contract.FilterLogs(opts, "StartupRegistered", founderRule)
	if err != nil {
		return nil, err
	}
	return &ApiStartupRegisteredIterator{contract: _Api.contract, event: "StartupRegistered", logs: logs, sub: sub}, nil
}

// WatchStartupRegistered is a free log subscription operation binding the contract event 0xee0f37ff49ffabe8e616c291af6ae8f83b33c79e076eae8f4ae1519f052ae322.
//
// Solidity: event StartupRegistered(address indexed founder, string name)
func (_Api *ApiFilterer) WatchStartupRegistered(opts *bind.WatchOpts, sink chan<- *ApiStartupRegistered, founder []common.Address) (event.Subscription, error) {

	var founderRule []interface{}
	for _, founderItem := range founder {
		founderRule = append(founderRule, founderItem)
	}

	logs, sub, err := _Api.contract.WatchLogs(opts, "StartupRegistered", founderRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(ApiStartupRegistered)
				if err := _Api.contract.UnpackLog(event, "StartupRegistered", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseStartupRegistered is a log parse operation binding the contract event 0xee0f37ff49ffabe8e616c291af6ae8f83b33c79e076eae8f4ae1519f052ae322.
//
// Solidity: event StartupRegistered(address indexed founder, string name)
func (_Api *ApiFilterer) ParseStartupRegistered(log types.Log) (*ApiStartupRegistered, error) {
	event := new(ApiStartupRegistered)
	if err := _Api.contract.UnpackLog(event, "StartupRegistered", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}
