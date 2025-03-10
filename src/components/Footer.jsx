import React from 'react';

import Telefon from "/images/Telefon.webp";
import instagram from "/images/instagram.webp";
import facebook from "/images/facebook.png";
import telegram from "/images/telegram.svg";
import ok from "/images/ok.svg";
import tiktok from "/images/tiktok.svg";





export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__data">
                        <div className="footer__apple">
                            <a href="" className="footer__">
                                <div className="footer__">
                                    <img className='footer__' src={Telefon} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="footer__samsung">
                            <h1 className="footer__samsung-gap-one">Выгодные предложения всегда рядом</h1>
                            <p className="footer__samsung-gap-two">
                                Выгодные предложения всегда рядом Заказывайте через приложение alif shop, узнайте о выгодных предложениях быстрее всех</p>
                            <div className="footer__googleplay">
                                <a href="" className="footer__google">
                                    <img className='footer__play--logo' src="https://miro.medium.com/v2/resize:fit:1400/0*HsI5uQ_8Ju9suain.png" alt="" />
                                </a>
                            </div>
                            <div className="footer__">
                                <a href="" className="footer__">
                                    <img className='footer__play--logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/512px-Download_on_the_App_Store_RGB_blk.svg.png" alt="" />
                                </a>
                            </div>
                            <div className="footer__">
                                <a href="" className="footer__">
                                    <img className='footer__play--logo' src="https://hellopaisa.co.za/hellopaisa-2021/wp-content/uploads/2021/06/huawei-Badge-Black.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="footer__nokia">
                            <a href="" className="footer__">
                                <img className='footer__' src="https://alifshop.uz/_ipx/f_webp,s_104x104/images/alifshop-qr-code.webp" alt="" />
                            </a>
                            <p className="footer__nokia-qr-kod">Наведите камеру на QR-код, чтобы скачать</p>
                        </div>
                    </div>
                    <div className="footer__alishop">
                        <div className="footer__alishop-uz">
                            <div className="footer__alishop">
                                <h1 className="footer__alishop-marketplace">alif shop</h1>
                                <p className="footer__alishop-allows">
                                    <a href="" className="focus__alishop-that">alifshop.uz</a>
                                    – маркетплейс, предоставляющий возможность покупателям приобрести широкий спектр товаров быстро и с удобством. Ha 
                                    <a href="" className="focus__alishop-purchase">alifshop.uz</a></p>
                                <div className="footer__alishop-immer">
                                    <h3 className="footer__alishop-wide">Показать все</h3>
                                </div>
                            </div>
                            <div className="footer__today">
                                <h1 className="footer__today-high">Телефоны в рассрочку</h1>
                                <p className="footer__today-smartphone">Сегодня, в эпоху высоких технологий, смартфон стал неотъемлемой частью нашей повседневной жизни. Благодаря приложениям и техническим параметрам современных телефонов, смартфоны часто заменяют нам</p>
                                <div className="footer__alishop-immer">
                                    <h3 className="footer__alishop-wide">Показать все</h3>
                                </div>
                            </div>
                            <div className="footer__give">
                                <h1 className="footer__give-opportunity">Ноутбуки в рассрочку</h1>
                                <p className="footer__give-our">ПК дают нам возможность качественно выполнять нашу работу и одновременно скрасить наш досуг. К примеру, при помощи ноутбука можно оперативно работать из любой точки мира, выполняя самую разную работу,</p>
                                <div className="footer__alishop-immer">
                                    <h3 className="footer__alishop-wide">Показать все</h3>
                                </div>
                            </div>
                            <div className="footer__addition-electronics">
                                <h1 className="footer__addition-marketplace">Техника в рассрочку</h1>
                                <p className="footer__addition-wide">Помимо электроники, на нашем маркетплейсе имеется широкий ассортимент бытовой техники: газовые плиты, грили, холодильники, стиральные машины, утюги, кондиционеры и много других</p>
                                <div className="footer__alishop-immer">
                                    <h3 className="footer__alishop-wide">Показать все</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <section className='all__footer'>
                        <div className="all__footer-general">
                            <div className="all__footer-conditions">
                                <div className="all__footer-good">
                                    <div className="all__footer-shift">
                                        <p className="allfooter-of">Документы</p>
                                        <div className="all__ons">
                                            <a href="" className="all__className">Общие условия продажи</a>
                                            <a href="" className="all__className">Устав</a>
                                            <a href="" className="all__className">Свидетельство</a>
                                        </div>
                                    </div>
                                    <div className="all__data">
                                        <p className="all__footer-service">Сервис</p>
                                        <div className="all__class">
                                            <a href="" className="all__className">Время намаза</a>
                                            <a href="" className="all__className">Рассрочка в Исламе</a>
                                            <a href="" className="all__className">Продавайте на alif shop!</a>
                                            <a href="" className="all__className">Возвраты</a>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="all__footer-smartphones">Каталог товаров</p>
                                        <div className="all__name">
                                            <a href="" className="all__className">Смартфоны и телефоны</a>
                                            <a href="" className="all__className">Гаджеты</a>
                                            <a href="" className="all__className">Аксессуары для телефонов</a>
                                            <a href="" className="all__className">Часы и аксессуары</a>
                                            <a href="" className="all__className">Cопутствующие товары</a>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="all__footer-main">Мы в соц-медиа</p>
                                        <div className="all__olain">
                                            <img src={instagram} alt="" className="all__className" />
                                            <img src={facebook} alt="" className="all__className" />
                                            <img src={telegram} alt="" className="all__className" />
                                            <img src={ok} alt="" className="all__className" />
                                            <img src={tiktok} alt="" className="all__className" />
                                        </div>
                                        <div className="all__immer">
                                            <p className="">Справочная служба</p>
                                            <a href="" className="">@alifshop_uz</a>
                                            <a href="" className="">+998 555 12 12 12</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    )
}