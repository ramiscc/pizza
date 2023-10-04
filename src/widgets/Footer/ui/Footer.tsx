import styles from './Footer.module.scss'
import {Container} from "shared/ui";
import {icons} from "shared/assets";

const Footer = () => {
    return (
        <Container>
            <div className={styles.footer}>
                <div className={styles.row}>
                    <div className={styles.logo}>
                        <img src={icons.logo} alt=""/>
                        <span className={styles.copyright}>© Copyright 2021 — Куда Пицца</span>
                    </div>
                    <div className={styles.item}>
                        <h2>Куда пицца</h2>
                        <span>О компании</span>
                        <span>Пользовательское соглашение</span>
                        <span>Условия гарантии</span>
                    </div>
                    <div className={styles.item}>
                        <h2>Помощь</h2>
                        <span>Ресторан</span>
                        <span>Контакты</span>
                        <span>Поддержка</span>
                        <span>Отследить заказ</span>
                    </div>
                    <div className={styles.item}>
                        <h2>Контакты</h2>
                        <span>
                            <img src={icons.phone} alt=""/>
                            +7 (926) 223-10-11
                        </span>
                        <span>
                            <img src={icons.location} alt=""/>
                            Москва, ул. Юных Ленинцев, д.99
                        </span>
                        <span>
                            <img src={icons.facebook} alt=""/>
                            facebook
                        </span>
                        <span>
                            <img src={icons.instagram} alt=""/>
                            instagram
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer
