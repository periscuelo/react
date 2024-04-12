import PropTypes from 'prop-types'
import styles from './style.module.css';

const Task = ({
  task,
  btAction
}) => {
  return (
    <div className={styles.container}>
      <p className={`${styles.title} ${task.isCompleted && styles.completed}`}>{task.id}. {task.title}</p>
      {!task.isCompleted && (<button className={styles.button} onClick={() => btAction(task.id)}>ok</button>)}
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object,
  btAction: PropTypes.func
}

export default Task