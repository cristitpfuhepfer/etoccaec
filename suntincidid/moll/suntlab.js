const prepMint = async () => {
  const { web3 } = useWeb3React();
  const contract = getContract(web3);

  const totalSupply = await contract.methods.totalSupply().call();
  const maxSupply = await contract.methods.maxSupply().call();

  if (parseInt(totalSupply) >= parseInt(maxSupply)) {
    alert("Sorry, all NFTs have been minted.");
    return;
  }

  const accounts = await web3.eth.getAccounts();
  const signer = accounts[0];

  const price = await contract.methods.getPrice().call();

  return {
    totalSupply,
    maxSupply,
    signer,
    price,
  };
};
