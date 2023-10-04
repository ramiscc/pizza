import styles from './sign-in.module.scss'
import {Button, Input} from "shared/ui";

const SignIn = () => {
    return (
        <div className={styles.signIn}>
            <h1 className={styles.title}>Вход в аккаунт</h1>
            <span className={styles.subtitle}>Сможете быстро оформлять заказы, <br/>использовать бонусы</span>
            <Input title={'Логин'}/>
            <Input title={'Пароль'} type={'password'}/>
            <Button typeBtn={'primary'}>Войти</Button>

            <span className={styles.copyright}>Продолжая, вы соглашаетесь со сбором и <br/> обработкой персональных данных и <br/> пользовательским соглашением</span>
        </div>
    )
}

export default SignIn


//войти
