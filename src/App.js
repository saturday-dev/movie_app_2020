import React from 'react';

/*
function Food({name}){
  //console.log(props.favorite)
  return <h1> I Like {name}</h1>;
}*/

function Food({name, picture}){
  //console.log(props.favorite)
  return (
    <div>
      <h1> I like {name}</h1>
      <img src = {picture} />
    </div>
  );
}

const foodIlike = [
  {
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    name: "bulgogi",
    image: "https://www.google.com/search?q=%EB%B6%88%EA%B3%A0%EA%B8%B0&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk02ziUIXmsNvR7TuYKh1cpJGpdpH8g:1593509047151&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-p87lm6nqAhVbUd4KHVSWBBUQ_AUoAXoECBgQAw&biw=1440&bih=701&dpr=2#imgrc=kjZoAmvHGo-KfM"
  },
  {
    name: "kimbap",
    image: "https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk03dn_nrK6M5JlKKfD5krm8w3qTmGQ:1593509069629&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqn6rwm6nqAhXDQN4KHYLUA4EQ_AUoAXoECBgQAw&biw=1440&bih=701#imgrc=Xz3xQoYZw3bqEM"
  },
  {
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
]

function rederFood(dish){
  console.log(dish)
}

function App() {
  return (  
    <div>
      {foodIlike.map(dish => (        
        //<Food name ={dish.name}  /> 
        <Food name ={dish.name} picture ={dish.image} /> 
      ))}
    </div>
  
  );
}

export default App;
