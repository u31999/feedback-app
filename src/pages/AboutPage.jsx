import {Link} from 'react-router-dom';
import Card from '../component/shared/Card';


function AboutPage() {
  return (
    <Card>
        <div>About</div>
        <div>
          <Link to='/'>Return home</Link>
        </div>      
    </Card>
  )
}

export default AboutPage
