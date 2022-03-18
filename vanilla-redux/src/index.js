import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";
/* 
- reducer는 함수이다.
- reducer는 parameter로 state와 action을 받는다.
- reducer에서 return되는 값이 store에 저장된다.
- dispatch로 reducer를 실행 시 state(여기선 count)를 store에 저장된 값으로 불러온다.
- reducer에서 action의 값으로 구분하여 결과값을 위한 로직을 짠다.
*/
// reducer
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// store
const countStore = createStore(countModifier);

const onChnage = () => {
  number.innerText = countStore.getState();
};

// subscribe은 state가 변할 때마다 실행된다.
countStore.subscribe(onChnage);

/* 
- dispatch는 객체 값으로 전달한다.
- reducer의 두번째 인자 action으로 받는다.
- action의 key값은 type으로 보내야한다.
*/
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
