---
Title: 'withdraw exit ERC20 POS '
Keywords: 'pos client, erc20, withdrawExit, polygon, sdk'
Description: 'Get started with maticjs'
---

`withdrawExit` method can be used to exit the withdraw process by using the txHash from `withdrawStart` method.

**Note**- withdrawStart transaction must be checkpointed in order to exit the withdraw.

```
const erc20RootToken = posClient.erc20(<root token address>);

// start withdraw process for 100 amount
const result = await erc20Token.withdrawExit(<burn tx hash>);

const txHash = result.getTransactionHash();

const txReceipt = result.getReceipt();

```

Once the transaction is complete & checkpoint is completed - amount will be deposited to root chain.