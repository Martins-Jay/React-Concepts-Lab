import { useState } from 'react';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn how React renders lists', completed: false },
    { id: 2, title: 'Understand why key prop exists ', completed: false },
    { id: 3, title: 'Practice reconciliation ', completed: true },
  ]);

  const [showNote, setShowNote] = useState(false);

  return (
    <div className="page">
      <div className="app-wrapper">
        {/* Task Card */}
        <div className="card">
          <h2>React List Reconciliation</h2>

          <button
            className="remove-btn"
            onClick={() => setTasks(tasks.slice(1))}
          >
            Remove first task
          </button>

          <TaskList tasksArr={tasks} />
        </div>

        {/* Explanation Panel */}
        <div className={`note ${showNote ? 'open' : ''}`}>
          <button
            className="note-toggle"
            onClick={() => setShowNote(!showNote)}
          >
            {showNote ? 'Hide note' : 'Why this project?'}
          </button>

          {showNote && (
            <>
              <h3>Why this project exists</h3>

              <p>
                In this app, the same <strong>component type</strong> (
                <code>TaskItem</code>) is rendered multiple times in a list.
                Each instance holds its own internal state, such as whether it
                is highlighted.
              </p>

              <p>
                <strong>Case 1: With a key</strong>
                <br />
                When each list item has a unique <code>key</code>, React can
                correctly match each component instance to its corresponding
                task. If you highlight a task and then remove the first item,
                React removes the correct component instance along with its
                state. The highlight disappears only from the removed task.
              </p>

              <p>
                <strong>Case 2: Without a key</strong>
                <br />
                When no key is provided, React falls back to matching components
                by their position in the list. If you highlight the first task
                and then remove it, React reuses the existing component instance
                for the next item. As a result, the highlight appears to “move”
                to the second task, even though you never interacted with it.
              </p>

              <p>
                This demonstrates that <code>key</code> is not about rendering
                lists faster. It is about giving React a stable identity so
                component state stays attached to the correct data.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function TaskList({ tasksArr }) {
  return (
    <ul className="task-list">
      {tasksArr.map((task) => (
        <TaskItem key={task.id} taskObj={task} />
      ))}
    </ul>
  );
}

function TaskItem({ taskObj }) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
      <li className={`task-item ${isHighlighted ? 'highlighted' : ''}`}>
        <span>{taskObj.title}</span>
        <button onClick={() => setIsHighlighted(!isHighlighted)}>Toggle</button>
      </li>
  );
}

export default App;
