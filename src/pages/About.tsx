import { Button, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import image from '../assets/me.jpg'
const About = () => {

    return (
        <div className="about">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img src={image} alt="" width={250} />
                    <h1 className="about-name">Михаил Князев</h1>
                    <h2 className="about-subtitle">
                        Фронтенд-разработчик
                    </h2>
                </Grid>
                <Grid item xs={8} className="about-text">
                    Навыки: React, Redux, TypeScript, Next JS, HTML, CSS, SCSS, JS, Jquery, Gulp, PUG
                    Имею небольшой опыт на Node js
                    <br /><br />
                    Опыт программирования: 2 года
                    <br />
                    Коммерческий опыт: 1 год
                    <br /><br />
                    Уровень английского языка: Средний
                    <br /><br />
                    Вредных привычек не имею, люблю играть на гитаре, сочинять песни =)
                    Кодить научился полностью самостоятельно с помощью курсов на YouToube, Udemy.
                    Надеюсь на желание со стороны более опытных разработчиков наставлять меня меня на верный путь, чтобы с каждым разом писать код все более эффективно
                    <br /><br />
                    Telegram: <a href="https://t.me/Neo_mikhail">@Neo_mikhail</a>
                    <br />
                    Github: <a href="https://github.com/mihamailo">https://github.com/mihamailo</a>
                </Grid>
            </Grid>
        </div>
    )
}
export default About