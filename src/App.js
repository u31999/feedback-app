import { useState } from "react";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeebackData from "./data/FeedbackData";

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
        <FeedbackList feedback={feedback}
        handleDelete={deleteFeedback} />
        </div>
        </>
    )
}

export default App;