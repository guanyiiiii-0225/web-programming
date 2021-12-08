import './App.css'
import { useState } from 'react'
import SignIn from './containers/signIn'
import ChatRoom from './containers/chatRoom'
import useChat from './useChat';


function App() {
  const { status, messages, sendMessage, clearMessages } = useChat();
  const [me, setMe] = useState('Your name')
  const [signIn, setSignedIn] = useState(false)

  return (
    <div className="App">
      {signIn? <ChatRoom me = {me} status = {status} messages = {messages} sendMessage = {sendMessage} clearMessages = {clearMessages}/> : <SignIn me = {me} setMe = {setMe} setSignedIn = {setSignedIn}/>}
    </div>
  )
}

export default App
