import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(' ');
  const [description, setDescription] = useState(' ');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <span className={styles.span}>Title:</span>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <span className={styles.span}>Description:</span>
      <TextInput
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add list</Button>
    </form>
  );
};
export default ListForm;
