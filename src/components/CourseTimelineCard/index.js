// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  return (
    <div className="courseDiv">
      <div className="titleline">
        <h1>{data.courseTitle}</h1>
        <div className="durationDiv">
          <AiFillClockCircle />
          <p className="durationP">{data.duration}</p>
        </div>
      </div>
      <div>
        <p>{data.description}</p>
      </div>
      <div className="tagsDiv">
        {data.tagsList.map(each => (
          <p className="tagItem">{each.name}</p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
