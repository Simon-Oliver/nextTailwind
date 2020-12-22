import React, { useEffect, useState } from 'react'
import Router , {useRouter}  from 'next/router';
import axios from 'axios'
import Pusher from 'pusher-js'


// var pusher = new Pusher('app_key', {
//     cluster: 'cluster',
//     encrypted: true
// })
// const channel = pusher.subscribe('websocket-test')



export default function socket() {
    const [people, setPeople] = useState({ id: null, people: [] });
    const [input, setInput] = useState({ msg: "" })


    const sendMsg = (e) => {
        e.preventDefault()
        console.log("Sending...")
        axios.post(`http://localhost:8000/message/123`, { msg: input.msg });
    }

    const onInputChange = (e) => {
        e.preventDefault()
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        let pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
            cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
        });
        console.log(process.env.NEXT_PUBLIC_PUSHER_APP_KEY)
        // let pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
        //     cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
        //     encrypted: true
        // });

        let channel = pusher.subscribe('websocket-test');

        channel.bind('message', function (data) {

            console.log('Received message: ' + data.msg);

        });

        window.onbeforeunload = pusher.disconnect()

        axios.get('http://localhost:8000/people').then(({ data }) => {
            const { people = [] } = data;
            setPeople({ people });

        }, []);


        return function cleanup() {
            channel.unbind('message')
            pusher.disconnect()
        }
    }, [])


    console.log(people)
    return (
        <div>
            <h1>Pusher test</h1>
            {people.people.map(e => (
                <div>
                    <div>{e.name}</div>
                    <div>{e.isOnline}</div>
                </div>

            ))}

            
            <form onSubmit={(e) => sendMsg(e)} onChange={(e) => onInputChange(e)}>
                <input name="msg" type="text" value={input.msg}></input>
                <button>Send MSG</button>
              
            </form>
            <button type="button" onClick={() => Router.push('/login')}>Redriect Button</button>
        </div>
    )



}