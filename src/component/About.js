import React, { useContext } from 'react'
import DiaryContext from '../context/Diary/DiaryContext'
import Carousel from 'react-bootstrap/Carousel';

 


const About = () => {
  const a = useContext(DiaryContext);
 
  return (
    <>
    <div> 
    <h1>We all have to write diary </h1>
      
    <h4  ><p>Diary writing is meant to be personal. A person maintains a log in which they record information about their life or a circumstance/incident. It’s a way of writing to yourself about your thoughts and emotions.

Although the terms diary and journal are often interchanged, there are some differences between the two, though both may serve somewhat different purposes. A journal is more ambiguous and unstructured in nature while a diary entry is more orderly in format and has a particular structure to it.

Keeping a diary or journal may be archaic, but it is something that many noteworthy people have done in the past, including a number of well-known authors. Diary entries have also featured in literature for a great many years through prominent diary-keepers such as Anne Frank.

Good for mental health
There are some advantages of keeping a diary. These benefits include improved emotional health and the ability to resolve traumatic experiences as a result of having a safe environment to convey your emotions. It is thought that this is because diary writing helps you to safely process your memories and revisit specific situations in a less distracting manner.

Writing your personal narrative tends to play a role in this, and it appears that focusing on both thoughts and emotions, rather than just feelings, is significant. A diary can then be used to keep track of your views and opinions across years, which can be extremely advantageous in terms of personal growth.

A diary is a safe way to talk about issues that have irritated or frustrated you, but it is still helpful to keep track of the good things in life. There is a good chance that you might forget a lot of it, hence, a positive diary will be a gateway to positive emotions at any point in time instead of dragging the reader down every time they decide to look back. This can inspire one to write in a more casual manner.

Along with this, it allows sharing information about one’s emotions and deepest thoughts. If one wants to reap the full rewards of writing things down, one must do so.</p></h4>
    </div>
    </>
  )
}

export default About