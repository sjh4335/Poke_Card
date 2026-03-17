interface UserProps {userInfo:{name:string, age:number, like:string}, clickHandler:()=>void}

import '../app.css';
export default function User(props: UserProps) {
  
  const {userInfo:{name, age, like}, clickHandler} = props;
  return (
    <div>
      <div className="blackNav">검은 바</div>
      <h1>[User 영역]</h1>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>좋아하는 것: {like}</p>
      <button onClick={clickHandler}>클릭</button>
    </div>
  );
}