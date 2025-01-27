import { styled } from "styled-components";
import { Icon, Title } from "../../../../components";


const InfoContainer = ({ className }) => {

    return (
        <div className={className}>
            <Title title="О нашем lounge cafe ELITE 2.0" size="50px" />
            <div className="info-text">
            <p>
            Каждые выходные задаетесь вопросом: «Куда сходить?»
            </p>
            <p>
            Теперь вам больше не нужно загружать голову этим вопросом, так как уютное лаунж кафе «Элит 2.0», расположенное в самом центре города, по адресу Красных бойцов 15, всегда ждёт вас в гости!
            </p>
            <p>
            Кухня включает в себя европейские блюда, которые давно зарекомендовали себя. Для любителей пива мы готовим закуски и горячие блюда, которые не оставят равнодушным фанатов напитка. Закуски к любому столу, холодные и горячие блюда, специальное банкетное меню, всё это вы найдете в нашей кухне.
            </p>
            <p>
            Если же у вас возникает вопрос: «Где покурить кальян?», то и на это у нас есть ответ. Darkside, Nakhla, Al Fakher, и другие табаки со всего мира. Более 50 различных вкусов и миксов на ваш выбор на современных качественных кальянах с хорошей тягой. Это позволяет получить максимальное удовольствие и релакс от покура. 
            </p>
            </div>
            <div className="info-cafe">
                <div className="operating-mode">
                        Режим работы:
                            <div>
                                ПН-ЧТ: с 15:00 до 24:00
                            </div>
                            <div>
                                ПТ-СБ: с 15:00 до 2:00
                            </div>
                            <div>
                                ВС: с 15:00 до 24:00
                            </div>
                </div>
                <div className="contact-info">
                    Наши контакты:
                        <div className="contact">
                            +7 (937) 881-85-78
                        </div>
                        <div className="contact">
                            <a href="https://vk.com/club190177686">
                            <Icon 
                                id="fa-vk" 
                                margin="-18px 0 0px 0"
                                size="70px"
                                color='#2552d7'
                            />
                            </a>
                            <a href="https://t.me/Elite_inza">
                            <Icon 
                                id="fa-telegram" 
                                margin="auto"
                                size="50px"
                                color='#2552d7'
                            />
                            </a>
                        </div>
                </div>
            </div>

        </div>
    )
   
};

export const Info = styled(InfoContainer)`
margin-top: 40px; 
border-top: 4px solid white;
    .info-text {
        font-size: 24px;
        font-weight: 700;
        color: white;
        padding: 10px;
        text-align: justify;

    }
    .info-cafe {
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        font-weight: 700;
        color: #e9b900;
    }
    .operating-mode {
        padding: 10px;

    }
    .contact-info {
        display: flex;
        flex-direction: column;
        padding: 10px;  
    }
    .contact {
        display: flex;
        gap: 10px;
    }

`;