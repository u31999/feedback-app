import { v4 as uuidv4 } from 'uuid'
import { useState } from "react";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeebackData from "./data/FeedbackData";
import Feedbackstats from "./component/Feedbackstats";
import FeedbackForm from "./component/FeedbackForm";

function App () {
    const [feedback, setFeedback] = useState(FeebackData)

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

    return(
        <>
        <Header />
        <div className="container">
            <FeedbackForm handleAdd={addFeedback} />
            <Feedbackstats feedback={feedback} />
            <FeedbackList feedback={feedback}
            handleDelete={deleteFeedback} />
        </div>
        </>
    )
}

export default App;