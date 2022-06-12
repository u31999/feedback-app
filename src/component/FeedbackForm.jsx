import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            {/* @todo - rating select component */}
            <div className="input-group">
                <input type='text'
                 onChange={handleChange}
                 value={text}
                 placeholder="Write a review" />
                <Button type="submit">Send</Button>
            </div>
        </form> 
    </Card>
  )
}

export default FeedbackForm
