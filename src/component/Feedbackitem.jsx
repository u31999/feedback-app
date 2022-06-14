import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types';
import Card from "./shared/Card";
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function Feedbackitem({item}) {
  const {deleteFeedback} = useContext(FeedbackContext)  
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close' 
        onClick={() => deleteFeedback(item.id)}>
          <FaTimes color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired
}

export default Feedbackitem
