import ListOfQuestions from '../list-of-questions/list-of-questions';
import './students-questions-component.css';

const StudentsQuestionsComponent = () => {
  return (
    <div className='history-main-container'>
      <div className='history-title'>
        <h1 style={{ color: 'white' }}>Bodovi studenata</h1>
      </div>
      <hr style={{ marginBottom: 20 }} />
      <ListOfQuestions />
    </div>
  );
};

export default StudentsQuestionsComponent;
