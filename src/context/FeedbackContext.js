import { v4 as uuidv4 } from 'uuid';
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedbcak()
    },[])

    const fetchFeedbcak = async () => {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        
        setFeedback(data)
        setIsLoading(false)
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to DELETE this!'))
        {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, upditem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item,
            ...upditem } : item))
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
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext