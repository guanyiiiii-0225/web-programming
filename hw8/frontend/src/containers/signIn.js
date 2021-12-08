import { Input, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState, useEffect} from 'react';


function SignIn({me, setMe, setSignedIn}){
  const [hasInitialze, setHasInitialized] = useState(false);

  useEffect(()=>{
    if (!hasInitialze){
      setMe(localStorage.getItem("name"));
      setHasInitialized(true);
    }
  }, [hasInitialze]);
  
  return(
    <>
      <div className="App-title">
        <h1>My Chat Room</h1>
      </div>
      <Input.Search
        prefix={<UserOutlined />}
        enterButton="Sign In"
        value = {me}
        onChange={(e) => {setMe(e.target.value)}}
        placeholder="Enter your name"
        size="large" style={{ width: 300, margin: 50 }}
        onSearch={ () => {
          if(me!=''){
            setSignedIn(true)
            localStorage.setItem('name', me);
          }
          else{
            message.error("User name cannot be empty");
          }
        }}
      />
    </>
  )
}
export default SignIn;
