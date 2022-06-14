import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from "react";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeebackData from "./data/FeedbackData";
import Feedbackstats from "./component/Feedbackstats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './component/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

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
        <FeedbackProvider>
            <Router>
            <Header />
            <div className="container">
            <Routes>
            <Route exact path='/' element={
                <>
                    <FeedbackForm handleAdd={addFeedback} />
                    <Feedbackstats />
                    <FeedbackList handleDelete={deleteFeedback} />
                    <AboutIconLink />
                </>
            } />

                <Route path='/about' element={<AboutPage />} />
            </Routes>
            </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;