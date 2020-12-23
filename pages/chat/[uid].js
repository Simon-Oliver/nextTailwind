import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Test from '../test';
import Pusher from 'pusher-js';

const Chat = (props) => {
  const [response, setResponse] = useState({});
  const router = useRouter();
  const { uid } = router.query;

  useEffect(() => {
    let pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
    });

    let channel = pusher.subscribe('websocket-test');

    channel.bind('users', function (data) {
      console.log('Received users: ', data.users);
    });

    axios.post(`http://localhost:8000/user/${uid}`, { status: 'online' });

    const cleanUp = () => {
      axios.post(`http://localhost:8000/user/${uid}`, { status: 'offline' });
      channel.unbind('users');
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

  console.log(response);
  return (
    <div className="flex items-center justify-center">
      <div class="rounded-lg shadow-lg border p-6 w-64 ">
        <h5 class="text-3xl font-bold mb-4 mt-0">My Title</h5>
        <p class="text-gray-700 text-sm pb-5">Content goes here</p>
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
