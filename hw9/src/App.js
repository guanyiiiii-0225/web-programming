import './App.css'
import React, { useEffect, useRef, useCallback, useState } from 'react'
import { MESSAGES_QUERY, CREATE_MESSAGE_MUTATION, MESSAGES_SUBSCRIPTION, DELETE_MESSAGE_MUTATION } from './graphql/index'
import { Button, Input, Tag } from 'antd'
import { useQuery, useMutation } from '@apollo/react-hooks'

function App() {
  const [username, setUsername] = useState('')
  const [targetname, setTargetname] = useState('')
  const [body, setBody] = useState('')

  const targetRef = useRef(1)
  const bodyRef = useRef(2)

  const { loading, error, data, subscribeToMore } = useQuery(MESSAGES_QUERY)
  const [addMessage] = useMutation(CREATE_MESSAGE_MUTATION)
  const [deleteMessage] = useMutation(DELETE_MESSAGE_MUTATION)

  useEffect(() => {
    subscribeToMore({
      document: MESSAGES_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev
        let newMessage = subscriptionData.data.Message.data
        const username = newMessage.fromName
        if (newMessage.toName === null) {
          return {
            Message: prev.Message.filter(({ fromName, toName, body }) => {
              return !( fromName === username || toName === username)
            })
          }
        } else {
        return {
          ...prev,
          Message: [...prev.Message, newMessage]
        }}
      }
    })
  }, [subscribeToMore])

  const handleFormSubmit = useCallback(
    (e) => {
      if (!username || !targetname || !body) return
      addMessage({
        variables: {
          fromName: username,
          toName: targetname,
          body: body
        }
      })
      setBody('')
    },
    [addMessage, username, targetname, body]
  )

  const handleDelete = useCallback(
      (e) => {
        console.log("deleteBtn did press")
        if (!username) return
        deleteMessage({
          variables: {
              username: username
            }
        })
      },
      [deleteMessage, username]
    )

  return (
    <div className="App">
      <div className="App-title">
        <h1>Simple Chat</h1>
        <Button type="primary" danger onClick={() => handleDelete()}>
          Clear
        </Button>
      </div>
      <div className="App-messages">
        {loading ? (
          <p style={{ color: '#ccc' }}>
            {error? 'Error...' : 'Loading...'}
          </p>
        ) : (
          data.Message.map(({ fromName, toName, body }, i) => {
            if (fromName === username || toName === username) {
              return(
                <p className="App-message" key={i}>
                  <Tag color="blue">{fromName}>{toName}</Tag> {body}
                </p>
              )}})
        )}
      </div>
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: 10 }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            targetRef.current.focus()
          }
        }}
      ></Input>
      <Input
        placeholder="Target"
        value={targetname}
        ref={targetRef}
        onChange={(e) => setTargetname(e.target.value)}
        style={{ marginBottom: 10 }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            bodyRef.current.focus()
          }
        }}
        ></Input>
      <Input.Search
        rows={4}
        value={body}
        ref={bodyRef}
        enterButton="Send"
        onChange={(e) => setBody(e.target.value)}
        placeholder="Type a message here..."
        onSearch={handleFormSubmit}
      ></Input.Search>
    </div>
  )
}

export default App
