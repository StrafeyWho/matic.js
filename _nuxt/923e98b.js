(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{270:function(e,o,t){"use strict";t.r(o);var r={components:{Layout:t(176).a}},n=t(14),component=Object(n.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("Layout",{attrs:{title:"approve ERC20 POS  ",description:"approve method can be used to approve required amount on the root token.",keywords:"pos client, erc20, approve, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/content/docs/pos/erc20/approve.md"}},[t("h1",{attrs:{id:"approve"}},[e._v("approve")]),e._v(" "),t("p",[t("code",[e._v("approve")]),e._v(" method can be used to approve required amount on the root token.")]),e._v(" "),t("p",[e._v("approve is required in order to deposit amount on polygon chain.")]),e._v(" "),t("pre",[t("code",[e._v("const erc20RootToken = posClient.erc20(<root token address>,true);\n\n// approve 100 amount\nconst approveResult = await erc20Token.approve(100);\n\nconst txHash = await approveResult.getTransactionHash();\n\nconst txReceipt = await approveResult.getReceipt();\n")])]),e._v(" "),t("h2",{attrs:{id:"spenderaddress"}},[e._v("spenderAddress")]),e._v(" "),t("p",[e._v("The address on which approval is given is called "),t("code",[e._v("spenderAddress")]),e._v(". It is a third-party user or a smart contract which can transfer your token on your behalf.")]),e._v(" "),t("p",[e._v("By default spenderAddress value is erc20 predicate address.")]),e._v(" "),t("p",[e._v("You can specify spender address value manually.")]),e._v(" "),t("pre",[t("code",[e._v("const erc20RootToken = posClient.erc20(<root token address>,true);\n\n// approve 100 amount\nconst approveResult = await erc20Token.approve(100, {\n    spenderAddress: <spender address value>\n});\n\nconst txHash = await approveResult.getTransactionHash();\n\nconst txReceipt = await approveResult.getReceipt();\n")])])])}),[],!1,null,null,null);o.default=component.exports}}]);