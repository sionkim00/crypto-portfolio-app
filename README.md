# Investment Tracker App
## Live Preview (Expo)
https://expo.dev/@sionkim00/coinmarketcap-clone
## Stacks

 - React Native
 - [React Recoil](https://recoiljs.org/)
 - Context API 
 - React Navigation
 - And many others such as wagmi charts.
 ## 🖥  Developments
 Three main features of application: 
 
 - Main Screen provides coins and its according charts 
 - In a watchlist, you can track coins you like!
 - Portfolio section gives a user to manage their portfolios while having a flexibility to customize quantity, price, etc..

In this app, to demonstrate flexibility, I used two different state management patterns, which are Context API and React Recoil. The context API is used to track watchlisted coins. While Context API is preferred global state management pattern, it's suitable for black/white theme or simple data. So to manage portfolio data, I used React Recoil, which is quite a new state management library. With Recoil's powerful shared state (Atoms) and functions (Selectors), I was able handle API calls, storing data in local device (Async Storage), and manage state very easily.

Real time coin datas were provided with [Coingecko API](https://www.coingecko.com/en/api). 

Interactive price chart development took most of the time, because using a  [animated-charts](https://github.com/rainbow-me/react-native-animated-charts/) by rainbow wallet kept giving an error. To handle this, I took a detour to use [wagmi charts](https://github.com/coinjar/react-native-wagmi-charts), which turned out to be fan-tas-tic! It enables user interaction along with high customizability.

```
<LineChart.Provider
data={coinMarketData.prices.map((price)  =>  {
return  {  timestamp:  price[0],  value:  price[1] };
})}
>
	<LineChart  height={200}>
		<LineChart.Path  color={percentageColor}>
			<LineChart.Gradient  />
		</LineChart.Path>
		<LineChart.CursorCrosshair  color="white">
			<LineChart.Tooltip  style={{  backgroundColor:  "white"  }} />
		</LineChart.CursorCrosshair>
	</LineChart>
</LineChart.Provider>
```

## 👀 Service Display


| <img src="https://github.com/sionkim00/coinmarketcap-clone/blob/master/previews/preview1.png" width="200"> | <img src="https://github.com/sionkim00/coinmarketcap-clone/blob/master/previews/preview2.png" width="200"> |
|--|--|
| Home Screen | Detailed Coins |

| <img src="https://github.com/sionkim00/coinmarketcap-clone/blob/master/previews/preview3.png" width="200"> |  
|--|
| Watchlist |

| <img src="https://github.com/sionkim00/coinmarketcap-clone/blob/master/previews/preview4.png" width="200"> | <img src="https://github.com/sionkim00/coinmarketcap-clone/blob/master/previews/preview5.png" width="200"> |
|--|--|
|Portfolio Screen  | Add Portfolio |
