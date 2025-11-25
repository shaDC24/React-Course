import { useState } from "react";    
import { Chatbot } from 'supersimpledev'
import LoadingSpinnerImage from '../assets/loading-spinner.gif' 
import './ChatInput.css'
import  dayjs  from 'dayjs'


export  function ChatInput({chatMessages,setChatMessages,isLoading,setIsLoading}){
            const [inputText, setInputText]= useState('');
            function saveInputText(event){
                console.log(event.target.value);
                setInputText(event.target.value);
            }
            async function sendMessage()
            {
                if(isLoading || inputText=='')
                {
                    return;
                }
                setIsLoading(true);

                setInputText('');

                const newChatMessage=[
                    ...chatMessages,
                    {
                    message:inputText,
                    sender:'user',
                    id:crypto.randomUUID(),
                    time: dayjs().valueOf()                       
                    }
                ];
               // setChatMessages(newChatMessage);
                setChatMessages([
                    ...newChatMessage,
                    {
                    message:<img src={LoadingSpinnerImage} className="loading-spinner" />,
                    sender:'robot',
                    id:crypto.randomUUID(),
                    time: dayjs().valueOf()                       
                    }
                ]);                
                const response=await Chatbot.getResponseAsync(inputText);
                
                setChatMessages([
                    ...newChatMessage,
                    {
                    message:response,
                    sender:'robot',
                    id:crypto.randomUUID(),
                    time: dayjs().valueOf()                          
                    }
                ]);                
                
            }
            setIsLoading(false);
            function keyUpdate(event)
            {
                if(event.key==='Enter')
                {
                    sendMessage();
                }
                else if(event.key=='Escape')
                {
                    setInputText('');
                }
            }
            function clearMessage()
            {
                setChatMessages([]);
            }
            return (
               <div className="chat-input-container">
                <input 
                    placeholder="Send a message to a Chatbot" 
                    size="30" 
                    onChange={saveInputText}
                    value={inputText}
                    onKeyDown={keyUpdate}
                    className="chat-input"

                />
                <button
                onClick={sendMessage}
                className="send-button"
                >Send</button>
                <button
                onClick={clearMessage}
                className="clear-button"
                >
                    Clear
                </button>
               </div>  
            );
        }