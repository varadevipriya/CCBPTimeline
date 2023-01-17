// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props

  return (
    <div className="courseDiv">
      <img src={data.imageUrl} className="projectImg" alt="project" />
      <div className="titleLine">
        <h1>{data.projectTitle}</h1>
        <div className="durationDiv">
          <AiFillCalendar />
          <p className="durationP">{data.duration}</p>
        </div>
      </div>
      <p>{data.description}</p>
      <div className="linkDiv">
        <a href={data.projectUrl}>Visit</a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
