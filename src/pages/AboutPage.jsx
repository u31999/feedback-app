import {Link} from 'react-router-dom';
import Card from '../component/shared/Card';
import {motion, AnimatePresence} from 'framer-motion';

function AboutPage() {
  const listStyle = {
    listStyle: 'disc',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'cursive',
    fontSize: '16px',
    fontWeight: 900,
  }

  const container = {
    hidden: { 
      opacity: 0,
      transform: 'translateX(-100%)'
      },
      show: {
        opacity: 1,
        transform: 'translateX(0%)',
        transition: {
        staggerChildren: 0.3
        }
      }

  }

  const item = {
    hidden: {
      opacity: 0,
      transform: 'translateX(-100%)'
    },
    show: {
      opacity: 1,
      transform: 'translateX(0%)'
    }
  }
 
  return (
    <Card>
      <AnimatePresence>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{delay: .5 ,duration: 1}}>
        <h1>About</h1>
        </motion.div>
      </AnimatePresence>
        <div>
        <AnimatePresence>
          <motion.ul style={listStyle}
            variants={container}
            initial="hidden"
            animate="show">
              <motion.li variants={item}>Feebback App, build using React</motion.li>
              <motion.li variants={item}>Build by Ahmed Hassan</motion.li>
              <motion.li variants={item}>
                <a href='mailto:alzain31999@gmail.com'>
                  Contact Developer
                </a>
              </motion.li>
              <motion.li variants={item}>
                <a href='https://u31999.github.io/Portfolio'
                  target='_blank' rel='noreferrer'>Go to my Portfolio</a>
              </motion.li>
              <motion.li variants={item}>
                <Link to='/'>Return home</Link>
              </motion.li>
          </motion.ul>
          </AnimatePresence>
        </div>      
    </Card>
  )
}

export default AboutPage
