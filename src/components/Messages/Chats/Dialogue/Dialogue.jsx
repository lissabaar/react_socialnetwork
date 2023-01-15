import cls from './Dialogue.module.css'

const Dialogue = (props) => {
    return (
        <div className={cls.dialogue}>
            <img src={props.img} alt="userpic" className={'userpic ' + cls.userpic}/>
            <div className={cls.name}>{props.name}</div>
            <div className={cls.preview}>{props.preview}</div>
        </div>
    )
}

export default Dialogue