import { Button, Input, Tag, message } from 'antd';
import { useState, useEffect, useRef } from 'react';
// import useChat from '../useChat';


function ChatRoom({me, status, messages, sendMessage, clearMessages}) {
  // const { status, messages, sendMessage, clearMessages } = useChat()
  const [body, setBody] = useState('')  // textBody
  const bodyRef = useRef(null);

  const displayStatus = (payload) => {
    if (payload.msg) {
      const { type, msg } = payload
      const content = {
        content: msg, duration: 0.5 }
      switch (type) {
        case 'success':
          message.success(content)
          break
        case 'error':
        default:
          message.error(content)
          break
        }
      }
  }
  useEffect(() => {
    displayStatus(status)
  }, [status])



  return (
    <div className="App">
      <div className="App-title">
        <h1>{me}'s Chat</h1>
        <Button type="primary" danger onClick={()=>{clearMessages(); console.log('clear button pressed')}} >
          Clear
        </Button>
      </div>
      <div className="App-messages">
        {messages.length === 0 ? (
            <p style={{ color: '#ccc' }}> No messages... </p>
          ) : (
            messages.map(({ name, body }, i) => (
              <p className="App-message" key={i}>
                <Tag color="blue">{name}</Tag> {body}
              </p>
            ))
          )}
      </div>
      <Input.Search
        ref={bodyRef}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        enterButton="Send"
        placeholder="Type a message here..."
        onSearch={(msg) => {
          if (!msg) {
            displayStatus({
              type: 'error',
              msg: 'Please enter a message body.'
            })
            return
          }    

          sendMessage({ name: me, body: msg })
          setBody('')
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            bodyRef.current.focus()
            }
          }
        }
      ></Input.Search>

    </div>
  )
}

export default ChatRoom

