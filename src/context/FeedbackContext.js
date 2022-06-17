import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    //const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

   
    /*
    "proxy": "https://my-json-server.typicode.com/u31999/server-feedback-app"
    * Get the data from a server
    useEffect(() => {
        fetchFeedbcak()
    },[])
      
    const fetchFeedbcak = async () => {
        //const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        
        setFeedback(data)
        setIsLoading(false)
    }
    */

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to DELETE this!'))
        {
            /*
            await fetch(`/feedback/${id}`, { method: 'DELETE' })
            setFeedback(feedback.filter((item) => item.id !== id))
            */
           setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        /*
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()

        setFeedback([data, ...feedback])
        */
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, upditem) => {
        /*
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(upditem)
        })

        const data = await response.json()

        setFeedback(
            feedback.map((item) => (item.id === id ? {...item,
            ...data } : item))
        )
        */
       setFeedback(
        feedback.map(item => (item.id === id) ? {...item, ...upditem} : item)
       )
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
//        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
