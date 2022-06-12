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

    return(
        <>
        <Header />
        <div className="container">
            <FeedbackForm />
            <Feedbackstats feedback={feedback} />
            <FeedbackList feedback={feedback}
            handleDelete={deleteFeedback} />
        </div>
        </>
    )
}

export default App;