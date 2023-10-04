import {Button, Container, Dropdown, Modal} from "shared/ui";
import styles from './Header.module.scss'
import {icons} from "shared/assets";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useState} from "react";
import {SignIn} from "features/SignIn";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledNavbar = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`

const Header = () => {

    const options = ['Акции', 'О компании', 'Пользовательское соглашение',
        'Условия гарантии', 'Ресторан', 'Контакты', 'Поддержка', 'Отследить заказ']

    const countries = ['Москва', 'Бишкек', 'Астана']
    const [openModal, setOpenModal] = useState(false)

    function handleSelectCountry(country) {
        console.log(country)
    }

    function getLogin() {
        setOpenModal(!openModal)
    }

    function onSelectHandle() {

    }

    return (
        <div className={styles.header}>
            <div className={styles.upHeader}>
                <StyledContainer>
                    <Dropdown type={'toggle'} placeholder={'Выберите город'} onSelect={handleSelectCountry} options={countries}/>
                    <span>Проверить адрес</span>
                    <span>Среднее время доставки*: <p className={styles.timer}>00:24:19</p></span>
                    <span>Время работы: с 11:00 до 23:00</span>
                    <div className={styles.user} onClick={getLogin}>
                        <img src={icons.user} alt=""/>
                        Войти в аккаунт
                    </div>
                    {openModal && <Modal type={'center'} onClose={getLogin}>
                        <SignIn/>
                    </Modal>}
                </StyledContainer>
            </div>
            <StyledNavbar>
                <Link to={'/'}>
                    <img src={icons.logo} alt=""/>
                </Link>
                <div className={styles.menu}>
                    <Link to={'/'}>Акции</Link>
                    <Link to={'/'}>Пицца</Link>
                    <Link to={'/'}>Суши</Link>
                    <Link to={'/'}>Напитки</Link>
                    <Link to={'/'}>Закуски</Link>
                    <Link to={'/'}>Комбо</Link>
                    <Link to={'/'}>Десерты</Link>
                    <Link to={'/'}>Соусы</Link>
                    <Link to={'/'}>
                        <Dropdown type={'primary'} placeholder={'Другое'} options={options} onSelect={onSelectHandle}/>
                    </Link>
                </div>
                <Button className={styles.btn} typeBtn={'primary'}>
                    <img src={icons.cart} alt=""/>
                    0 ₽
                </Button>
            </StyledNavbar>
        </div>
    )
}

export default Header
