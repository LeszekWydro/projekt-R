import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';

const ColumnForm = props => {

    const [title, setTitle] = useState(' ');
    const [icon, setIcon] = useState(' ');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon});
        setIcon('');
        setTitle('');
    }; 

   
	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
        <span className={styles.span}>Title:</span><input type="text" className={styles.input} value={title} onChange={e => setTitle(e.target.value)} />
        <span className={styles.span}>Icon: </span><input type="text" className={styles.input} value={icon} onChange={e => setIcon(e.target.value)} />
        <Button>Add column</Button>
        </form>
	);
};   

export default ColumnForm;