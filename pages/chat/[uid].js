import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Test from '../test';
import Pusher from 'pusher-js';
import e from 'cors';

const Chat = (props) => {
  const [response, setResponse] = useState({});
  const [messages, setMessages] = useState([{ msg: 'Test Message', id: 123 }]);
  const [input, setInput] = useState({ msg: '' });
  const router = useRouter();
  const { uid } = router.query;

  console.log('------------------------+++++++++ Props', props);

  useEffect(() => {
    let pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
    });

    setMessages(props.messages);

    let channel = pusher.subscribe('websocket-test');

    channel.bind('users', function (data) {
      console.log('Received users: ', data.users);
    });

    channel.bind('message', function (data) {
      setMessages(data.messages);
      console.log('Received messages: ', data.messages);
    });

    channel.bind('messageSeen', function (data) {
      console.log('Seen!!!!');
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

  //   useEffect(() => {
  //     console.log('###### seen sent');
  //     axios.post('http://localhost:8000/seen');
  //   });

  const sendMsg = (e) => {
    e.preventDefault();
    console.log('Sending...');
    axios.post(`http://localhost:8000/message/${uid}`, { msg: input.msg });
  };

  const onInputChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const renderMessage = (oldMsg) => {
    const msg = oldMsg.map((e) => {
      if (e.id === uid) {
        return { ...e, isUser: true };
      } else {
        return { ...e, isUser: false };
      }
    });

    var previousNotUserMsg,
      index = msg.length - 1;
    for (; index >= 0; index--) {
      if (msg[index].isUser == true) {
        previousNotUserMsg = index;
        break;
      }
    }

    msg[previousNotUserMsg] = { ...msg[previousNotUserMsg], isLast: true };
    console.log('<<<<<<<<<<< Render Messsage', msg);
    return msg.map((e, i) => {
      return (
        <div
          class={`${e.isUser ? 'col-start-6 col-end-13' : 'col-start-1 col-end-8'} p-3 rounded-lg`}
        >
          <div
            class={`flex ${
              !e.isUser ? 'flex-row items-center' : 'items-center justify-start flex-row-reverse'
            }`}
          >
            <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
              A
            </div>
            <div
              class={`relative text-sm ${
                e.isUser ? 'bg-indigo-100 mr-3' : 'bg-white ml-3'
              } py-2 px-4 shadow rounded-xl`}
            >
              <div>{e.msg}</div>
              {e.isLast ? (
                <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">Seen</div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      );
    });
  };

  console.log(response);
  return (
    <div className="flex items-center justify-center">
      <div class="wd-auto grid grid-cols-12 gap-y-2">{renderMessage(messages)}</div>
      <form onSubmit={(e) => sendMsg(e)} onChange={(e) => onInputChange(e)}>
        <input name="msg" type="text" value={input.msg}></input>
        <button>Send MSG</button>
      </form>
    </div>
  );
};

Chat.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:8000/init');
  const json = await res.json();
  return json;
};

export default Chat;
