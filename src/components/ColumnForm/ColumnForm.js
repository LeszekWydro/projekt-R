import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';

const ColumnForm = props => {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: value});
        setValue('');
    }; 

    const [title, setTitle] = useState(' ');
    const [icon, setIcon] = useState(' ');


	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
        <span className={styles.span}>Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} /></span>
        <span className={styles.span}>Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} /></span>
        <Button>Add column</Button>
        </form>
	);
};   

export default ColumnForm;