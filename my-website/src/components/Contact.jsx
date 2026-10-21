import { motion } from 'framer-motion';


export default function Contact(){
    return(
        <motion.div
        initial={{x:-100}}
        animate={{x:0}}
        transition={{
            duration: '2',
            delay: '0.5'
        }}
         className="contact-container">
            <ul>
                <li className="item">Email : ************@gmail.com</li>
                <li className="item">Phone : ***********</li>
                <li  className="item">Instagram : *********</li>
                <li  className="item">Twitter (X) : **********</li>
            </ul>
            <div>
            </div>
        </motion.div>
    )
}