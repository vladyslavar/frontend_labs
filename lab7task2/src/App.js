import './App.css';
import Goods from './Goods/GoodsCard';

function App() {
  return (
    <div> 
        <Goods goodsitems = {masive} />
    </div>
  );
}

const masive = [
{
  photo: './peach.png',
  name: "peach",
  price: "12.65"
},
{
  photo: "./apple.png",
  name: "apple",
  price: "4.20"
},
{
  photo: "./pineapple.png",
  name: "pineapple",
  price: "16.40"
},
{
  photo: "./orange.png",
  name: "orange",
  price: "9.50"
},
{
  photo: "./raspberry.png",
  name: "raspberry",
  price: "7.50"
},
{
  photo: "./banana.png",
  name: "banana",
  price: "5.80"
},
{
  photo: "./lemon.png",
  name: "lemon",
  price: "7.50"
},
{
  photo: "./grape.png",
  name: "grape",
  price: "7.20"
},
{
  photo: "./corn.png",
  name: "corn",
  price: "1.80"
},
]

export default App;
