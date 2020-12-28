import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Test from '../test';
import Pusher from 'pusher-js';
import e from 'cors';
const uuid = require('uuid').v4;

import Messages from "../../components/Message/Messages"

const Chat = (props) => {
  const [response, setResponse] = useState({});
  const [messages, setMessages] = useState([{ msg: 'Test Message', uid: 123, mid: 834, isRead: false }]);
  const [input, setInput] = useState({ msg: '' });
  const router = useRouter();
  const { uid } = router.query;

  useEffect(() => {
    let pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
    });

    setMessages(props.messages);

    let channel = pusher.subscribe('websocket-test');

    channel.bind('users', function (data) {
      console.log("Added User", data)
    });

    channel.bind('message', function (data) {
      console.log('Messages updated', data)
      setMessages(data.messages);
    });

    channel.bind('messageSeen', (data)=>{
      console.log('Messages updated', data)
      setMessages(data.messages)
    });

    axios.post(`http://localhost:8000/user/${uid}`, { status: 'online' });

    const cleanUp = () => {
      axios.post(`http://localhost:8000/user/${uid}`, { status: 'offline' });
      channel.unbind('users');
      channel.unbind('message');
      channel.unbind('messageSeen');
      pusher.unsubscribe('websocket-test');
      pusher.disconnect();
    };

    window.onbeforeunload = () => {
      cleanUp();
    };

    setResponse({ ...response, ...props });

    return () => {
      cleanUp();
    };
  }, []);


  const sendMsg = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/message/${uid}`, { msg: input.msg, mid: uuid(), uid: uid });
  };

  const onInputChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };



  return (
    <div className="flex items-center justify-center">
      <Messages
        messages={messages}
        uid={uid}
      ></Messages>
      <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
        <div className="relative w-full">
          <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <form onSubmit={(e) => sendMsg(e)} onChange={(e) => onInputChange(e)}>
              <input className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" name="msg" type="text" value={input.msg}></input>
              <button class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">Send MSG</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Chat.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:8000/init');
  const json = await res.json();
  return json;
};

export default Chat;
