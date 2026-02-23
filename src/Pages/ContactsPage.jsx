import FooterComponent from '../Components/FooterComponent';
import HeaderComponent  from '../Components/HeaderComponent'


function ContactsPage () {
    return (
        <div className="font-normal">
            <HeaderComponent />
            <div className="w100p min-h-[85vh] p-20 pl-70 pr-70 flex flex-col gap-3.5 text-xl">
                <p className='text-5xl font-medium'>Контакты</p>
                <p>Адрес: г. Смоленск, ул. Большая Советская, д. 74, офис 108</p>
                <p>Телефон: +7 (4852) 94-05-66</p>
                <p>Факс: +7 (4852) 94-05-66</p>
                <p>E-mail: avdis@rambler.ru</p>
                <p>Skype: avdis</p>
                <p>Адрес: г. Ярцево, ул. Ленина, д. 13, офис 4</p>
                <p>Телефон: +7 (4852) 94-05-66</p>
                <p>Факс: +7 (4852) 94-05-66</p>
                <p>E-mail: avdis2@rambler.ru</p>
                <p>Skype: avdis2</p>
            </div>
            <FooterComponent />
        </div>
    )
}
export default ContactsPage;