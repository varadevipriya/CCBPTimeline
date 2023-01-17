// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="mainBg">
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <div className="chronoDiv">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return <CourseTimelineCard data={each} />
            }
            return <ProjectTimelineCard data={each} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
