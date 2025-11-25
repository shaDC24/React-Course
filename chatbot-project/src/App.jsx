import { useEffect, useState } from 'react'
import { ChatInput } from './components/ChatInput';
import  ChatMessages  from './components/ChatMessages';
import './App.css'
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';



function App()
        {
            useEffect(()=>{
                Chatbot.addResponses({
                    'goodbye': 'Goodbye. Have a great day!',
                    'Give me a unique ID': function() {
                        return `Sure! Here is a unique ID ${crypto.randomUUID()}`;
                    }
                })
            });
            const time=dayjs().valueOf();
            

            /*return (
            <>                
                <ChatInput />
                <ChatMessage 
                    message="hello chatbot" 
                    sender="user" 
                />
                <ChatMessage 
                    message="Hi How can I help you?" 
                    sender="robot" 
                />
            </>                
            );*/
            // const [chatMessages,setChatMessages]=useState([
            // // {
            // //     message:'hello chatbot',
            // //     sender:'user',
            // //     id:'id1'
            // // },
            // // {
            // //     message: 'Hello, How can i help you?',
            // //     sender:'robot',
            // //     id:'id2'
            // // },
            // // {
            // //     message: 'can you get me todays date?',
            // //     sender:'user',
            // //     id:'id3'
            // // },
            // // {
            // //     message: 'Today is 23 november,2025',
            // //     sender:'robot',
            // //     id:'id4'

            // // }
            // ]);
            //const [chatMessages,setChatMessages]=array;
            // const chatMessages=array[0];
            // const setChatMessages=array[1];            
            const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [{}]);


            useEffect(() => {
                localStorage.setItem('messages', JSON.stringify(chatMessages));
            }, [chatMessages]);            
            const [isLoading,setIsLoading]=useState(false);
            return(
                <div className="app-container">
                <p className="welcome-message">{chatMessages.length===0?
                    "Welcome to the chatbot ! Send a message using the below textbox":
                    ""
                }</p>
                { chatMessages.length===0? (time && (
                    <div className="chat-message-time">
                        {dayjs(time).format('h:mma')}
                    </div>)):""
                }                
                <ChatMessages 
                chatMessages={chatMessages}              
                />
                <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                />                
                </div>
            );
        }

export default App
