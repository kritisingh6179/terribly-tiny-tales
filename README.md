Question:-
On first load, only has a Submit button
On clicking on Submit, it will fetch the contents of https://www.terriblytinytales.com/test.txt
Parse the content and find the frequency of occurrence of each word (some words will occur only once, some twice and so on, and some will occur N times)
Then on the frontend, plot a histogram of the 20 most occurring words.
Also build an "Export" button, which when clicked will download a CSV file of the histogram data.
X-axis = top 20 words with highest occurrence Y-axis = how many times they occurred in the file

deploy link:=https://timely-salamander-b6619e.netlify.app/

libraries used:=

1.react-chartjs-2 =
react-chartjs-2 has drawing support for Canvas only and renders on the client-side. react-chartjs-2 supports animation and most of the charts it offers are responsive by default. The library provides some components for various types of chart styles out of the box and also allows for customization.

2.chart.js =
Chart.js is a popular JavaScript library used for creating flexible charts on websites

3.react-csv=
Build CSV files on the fly basing on Array/literal object of data

output:-![a](https://github.com/kritisingh6179/terribly-tiny-tales/assets/77061475/fcec79dc-ecc8-463c-834d-2b4d6ab9b775)
after clicking submit
![image](https://github.com/kritisingh6179/terribly-tiny-tales/assets/77061475/3f1ca4c9-1807-442d-a176-8a24405d3f0c)



