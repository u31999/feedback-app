import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import Feedbackstats from "./component/Feedbackstats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './component/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App () {
    return(
        <FeedbackProvider>
            <Router>
            <Header />
            <div className="container">
            <Routes>
            <Route exact path='/' element={
                <>
                    <FeedbackForm />
                    <Feedbackstats />
                    <FeedbackList />
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