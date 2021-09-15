import { Button, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import image from '../assets/me.jpg'
const About = () => {
    const [english, setEnglish] = useState(false)
    const buttons = (
        <div>
            <Button onClick={() => setEnglish(!english)}>English</Button>
            <Button onClick={() => setEnglish(!english)}>Русский</Button>
        </div>)

    if (english) {
        return (
            <div className="about">
                {buttons}
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
                        Имею небольшой опыт написания на Node js
                        <br /><br />
                        Опыт программирования: 2 года
                        <br />
                        Коммерческий опыт: 1 года
                        <br /><br />
                        Уровень английского языка: Средний
                        <br /><br />
                        Вредных привычек не имею, люблю играть на гитаре, сочинять песни =)
                        Надеюсь на желание со стороны более опытных наставников наставлять меня на правильный путь, чтобы с каждым разом писать код все более эффективно
                        <br /><br />
                    </Grid>
                </Grid>
            </div>
        )
    }
    return (
        <div className="about">
            {buttons}
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
                    Имею небольшой опыт написания на Node js
                    <br /><br />
                    Опыт программирования: 2 года
                    <br />
                    Коммерческий опыт: 1 года
                    <br /><br />
                    Уровень английского языка: Средний
                    <br /><br />
                    Вредных привычек не имею, люблю играть на гитаре, сочинять песни =)
                    Надеюсь на желание со стороны более опытных наставников наставлять меня на правильный путь, чтобы с каждым разом писать код все более эффективно
                    <br /><br />
                </Grid>
            </Grid>
        </div>
    )
}
export default About