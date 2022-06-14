import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 charcter')
            setBtnDisabled(true)
        }else {
            setMessage(null)
            setBtnDisabled(false)
        }
        
        setText(e.target.value)
    }

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input type='text'
                 onChange={handleChange}
                 value={text}
                 placeholder="Write a review" />
                <Button type="submit" isDisabled={btnDisabled}>
                Send
                </Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form> 
    </Card>
  )
}

export default FeedbackForm
