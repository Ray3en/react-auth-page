import { Route, Routes } from 'react-router-dom'
import s from './Modal.module.css'
import FormElem from '../FormElem/FormElem'
import {ReactComponent as XMark} from '../../icons/xmark-solid.svg'

function Modal({active, setActive}){

    window.onkeydown = (e) => {
        if (e.key === 'Escape'){
            setActive(false)
        }
    }


    return(
        <div onClick={() => setActive(false)} className={`${s.modal} ${active && s.active}`}>
            <div onClick={(e) => e.stopPropagation()} className={`${s.modal_content} ${active && s.active}`}>
                <XMark onClick={() => setActive(false)} className={s.icon_modal}/>        
                <Routes>
                    <Route path='/login' element={<FormElem
                                                    title={'Авторизация'}
                                                    type={'login'}
                                                    button={{submit: 'Авторизоваться', redirect:'Регистрацию'}}
                                                    link={'/registration'}
                                                    input={{email: 'Почта', password: 'Пароль'}}
                                                    infoText={'Укажите логин и пароль для авторазции'}
                                                />}/>
                    <Route path='/registration' element={<FormElem
                                                    title={'Регистрация'}
                                                    type={'reg'}
                                                    button={{submit: 'Зарегистрироваться', redirect:'Авторизация'}}
                                                    link={'/login'}
                                                    input={{email: 'Почта', password: 'Пароль', secondPass: 'Подтверждение пароля'}}
                                                    infoText={'Регистрируясь, вы соглашаетесь с нашими правилами политики и конфиденциальности'}
                                                />}/>
                    <Route path='/reset' element={<FormElem
                                                    title={'Сброс пароля'}
                                                    type={'reset'}
                                                    button={{submit: 'Cброс пароля', redirect:'Авторизация'}}
                                                    link={'/login'}
                                                    input={{email: 'Почта'}}
                                                    infoText={'Указав почту, к вам придет письмо для сброса пароля. Срок активации сброса - 24 часа'}
                                                />}/>
                </Routes>
            </div>
        </div>
    )
}


export default Modal