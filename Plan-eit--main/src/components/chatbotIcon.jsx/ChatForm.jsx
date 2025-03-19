import { useRef } from "react"



const ChatForm = ({chatHistory,setChatHistory,generateBotResponse}) => {
    const inputRef = useRef();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;

        inputRef.current.value="";


       
        setChatHistory(history =>[...history,{role:"user",text:userMessage }])
         
       
        setTimeout(() =>{

         
          setChatHistory((history)=>[...history,{role:"model",text:"Thinking..."}])
          
          
          generateBotResponse([...chatHistory ,{role:"user",text:`Using the details provided above, please address the query : ${userMessage}`}])
        },600)

    }


    return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
    <input type="text" ref={inputRef} placeholder="Messaage..." required className="message-input" />
    <button class="material-symbols-rounded">arrow_upward</button>
  </form>
  )
}

export default ChatForm
