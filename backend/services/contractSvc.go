package services

import (
	"context"
	"crypto/ecdsa"
	"log"
	"math/big"

	"github.com/SohamGhugare/hackbangalore-24/contracts/api"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
)

// connect to the ethereum client
func connectClient() *ethclient.Client {
	client, err := ethclient.Dial("http://127.0.0.1:7545")
	if err != nil {
		log.Fatalln(err)
	}

	return client
}

// get the account auth
func getAccountAuth(client *ethclient.Client, accountAddress string) *bind.TransactOpts {

	privateKey, err := crypto.HexToECDSA(accountAddress)
	if err != nil {
		panic(err)
	}

	publicKey := privateKey.Public()
	publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
	if !ok {
		panic("invalid key")
	}

	fromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)

	//fetch the last use nonce of account
	nonce, err := client.PendingNonceAt(context.Background(), fromAddress)
	if err != nil {
		panic(err)
	}
	log.Println("nounce=", nonce)
	chainID, err := client.ChainID(context.Background())
	if err != nil {
		panic(err)
	}

	auth, err := bind.NewKeyedTransactorWithChainID(privateKey, chainID)
	if err != nil {
		panic(err)
	}

	gasPrice, err := client.SuggestGasPrice(context.Background())
	if err != nil {
		log.Fatal(err)
	}

	auth.Nonce = big.NewInt(int64(nonce))
	auth.Value = big.NewInt(0)      // in wei
	auth.GasLimit = uint64(3000000) // in units
	auth.GasPrice = gasPrice

	return auth
}

func RegisterStartupSvc(name string) string {
	client := connectClient()

	auth := getAccountAuth(client, "94e3aa4e7f1f8dffc84ebab87e8765ba46bb9cb624f47a5b518ccc12f72296ba")

	//api is redirected from api directory from our contract go file
	deployedContractAddress, _, _, err := api.DeployApi(auth, client)

	if err != nil {
		log.Fatalln(err)
	}

	log.Println("Deployed contract to address: ", deployedContractAddress.Hex()) // print deployed contract address

	conn, err := api.NewApi(common.HexToAddress(deployedContractAddress.Hex()), client)
	if err != nil {
		panic(err)
	}

	//calling the function of contract
	txn, err := conn.RegisterStartup(auth, name)

	return txn.Hash().Hex()

}
