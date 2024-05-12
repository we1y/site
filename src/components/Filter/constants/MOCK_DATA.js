import { Link } from 'react-router-dom'

import building from '../../../assets/itemphotos/building.jpeg'
import education from '../../../assets/itemphotos/education.jpeg'
import finance from '../../../assets/itemphotos/finance.jpeg'
import health from '../../../assets/itemphotos/health.jpeg'
import hotel from '../../../assets/itemphotos/hotel.jpeg'
import industrial from '../../../assets/itemphotos/industrial.jpeg'
import IT from '../../../assets/itemphotos/IT.jpeg'
import security from '../../../assets/itemphotos/security.jpeg'
import transportlogistics from '../../../assets/itemphotos/transport&logistics.jpeg'



export const data = [


    // ot - Отрасль
    // pr - Профессия
    // img - Картинка карточки
    // fil - Филлиал
    // zp - Средняя зп
    // iimg - Фото на странице профессии

    
     



{
    id: 1,
    img: security,
    ot:"Безопасность", 
    pr:"Безопасность, Пожарная безопасность, Защита в чрезвычайных ситуациях, Правоохранительная деятельность", 
    fil:"",
    zp: "",
    inf: "Ответственность за обеспечение безопасности и защиту интересов организации, её сотрудников, клиентов или других заинтересованных сторон. Эта профессия широко представлена в различных сферах, включая бизнес, государственные учреждения, промышленность, финансы, здравоохранение и другие",
    species: 
    <div>
        <Link to='/specialty/1'>Защита в чрезвычайных ситуациях</Link>
        <Link to='/specialty/2'>Пожарная безопасность</Link>
        <Link to='/specialty/3'>Правоохранительная деятельность</Link>
    </div>,
    fits: 
    <div>
        <li>Понимает важность своей роли в обеспечении безопасности и готов принимать на себя ответственность за принимаемые решения</li>
        <li>Способен эффективно руководить командой, координировать действия сотрудников в чрезвычайных ситуациях</li>
        <li>Имеет интерес к сфере права, особенно в контексте безопасности и соблюдения нормативов</li>
    </div>,
},


{
    id: 2,
    img: IT,
    ot:"IT", 
    pr:"IT, Сетевое и системное администрирование, Информационные системы и программирование, Обеспечение информационной безопасности автоматизированных систем", 
    fil:"",
    zp: "",
    inf: "Работа в области информационных технологий, проектировани, разработка, эксплуатация и поддержка компьютерных систем, программного обеспечения, сетевых инфраструктур и баз данных",
    species: 
    <div>
        <Link to='/specialty/4'>Сетевое и системное администрирование</Link>
        <Link to='/specialty/5'>Информационные системы и программирование</Link>
        <Link to='/specialty/6'>Обеспечение информационной безопасности автоматизированных систем</Link>
    </div>,
    fits: 
    <div>
        <li>Способен анализировать проблемы, разбираться в сложных системах, искать эффективные решения и быть внимательным к деталям</li>
        <li>Способен анализировать данные, выявлять тенденции и делать выводы на основе информации</li>
        <li>Способен эффективно общаться и сотрудничать с коллегами</li>
    </div>, 
},

{
    id: 3,
    img: industrial,
    ot:"Промышленность", 
    pr:"Промышленность, Производство и эксплуатация оптических И оптико-электронных приборов и систем, Оператор-наладчик металлообрабатывающих станков, Эксплуатация беспилотных авиационных систем, Мастер сельскохозяйственного производства", 
    fil:"",
    zp: "",
    inf: "Обеспечение функционирования и эффективность оборудования, используемого в различных этапах производства. Техник в этой области выполняет широкий спектр задач, включая мониторинг процессов, обеспечение безопасности и контроль качества продукции, а также сотрудничество с инженерами и другими специалистами для улучшения производственных методов и технологий.",
    species: 
    <div>
        <Link to='/specialty/7'>Производство и эксплуатацаия оптических и оптико-электронных приборов и систем</Link>
        <Link to='/specialty/8'>Оператор-наладчик металлообрабатывающих станков</Link>
        <Link to='/specialty/9'>Эксплуатация беспилотных авиационных систем</Link>
        <Link to='/specialty/10'>Мастер сельскохозяйственного производства</Link>
    </div>,
    fits: 
    <div>
        <li>Готов к быстрой адаптации к новым технологиям и методам работы</li>
        <li>Способен на взаимодействие с коллегами, экспертами и другими специалистами</li>
        <li>Способен искать решения для сложных задач и проблем</li>
    </div>, 
},

{
    id: 4,
    img: transportlogistics,
    ot:"Транспорт", 
    pr:"Транспорт, Операционная деятельность в логистике, Мастер по ремонту и обслуживанию автомобилей", 
    fil:"",
    zp: "",
    inf: "Включает в себя широкий спектр задач, начиная от взаимодействия с клиентами и заканчивая управлением и координацией сервисных процессов на транспортных средствах, таких как поезда, самолеты, автобусы или круизные лайнеры",
    species: 
    <div>
        <Link to='/specialty/11'>Операционная деятельность в логистике</Link>
        <Link to='/specialty/12'>Мастер по ремонту и обслуживанию автомобилей</Link>
    </div>,
    fits: 
    <div>
        <li>Способен сохранять спокойствие и принимать решения в сложных условиях</li>
        <li>Имеет интерес к видам транспорта, их характеристикам и особенностям</li>
        <li>Готов предлагать и внедрять новые идеи для оптимизации процессов</li>
    </div>, 
},

{
    id: 5,
    img: hotel,
    ot:"Гостеприимство", 
    pr:"Гостеприимство, Поварское и кондитерское дело, Туризм и гостеприимство", 
    fil:"",
    zp: "",
    inf: "Обеспечение высокого уровня обслуживания и удовлетворение потребностей гостей в гостиницах, туристических комплексах, домах отдыха и выполнение работ, связанных с комфортным размещением и соответствующими стандартами обслуживания посетителей",
    species: 
    <div>
        <Link to='/specialty/13'>Поварское и кондитерское дело</Link>
        <Link to='/specialty/14'>Туризм и гостеприимство</Link>
    </div>,
    fits: 
    <div>
        <li>Способен быть открытым, дружелюбным и легко общаться с разными людьми</li>
        <li>Умеет гибко и эффективно реагировать на стресс</li>
        <li>Способен управлять несколькими задачами одновременно</li>
    </div>, 
},

{
    id: 6,
    img: finance,
    ot:"Торговля и финансы", 
    pr:"Торговля и финансы, Финансы, Экономика и бухгалтерский учет", 
    fil:"",
    zp: "",
    inf: "Анализ экономических и финансовых данных, оценка финансового состояния компаний, инвестиционных возможностей и рисков, разработка стратегий финансирования и управления капиталом, а также предоставление консультации по вопросам управления финансами и кредитной политики",
    species: 
    <div>
        <Link to='/specialty/15'>Финансы</Link>
        <Link to='/specialty/16'>Экономика и бухгалтерский учет</Link>
    </div>,
    fits: 
    <div>
        <li>Увлечен работой с цифрами, финансовыми отчетами и бюджетами</li>
        <li>Имеет интерес к поиску и решению сложных задач</li>
        <li>Заинтересован в математике и экономике</li>
    </div>, 
},

{
    id: 7,
    img: health,
    ot:"Здравоохранение", 
    pr:"Здравоохранение, Сестринское дело", 
    fil:"",
    zp: "",
    inf: "Объединяет в себе множество специализаций, начиная от врачей различных профилей и заканчивая медицинскими сестрами, лаборантами и другими специалистами здравоохранения. Играет ключевую роль в поддержании здоровья населения, обеспечении качества и безопасности медицинской помощи",
    species: 
    <div>
        <Link to='/specialty/17'>Сестринское дело</Link>
    </div>,
    fits: 
    <div>
        <li>Способен понимать и делиться чувствами других</li>
        <li>Имеет интерес к биологии, химии, анатомии и другим научным дисциплинам</li>
        <li>Спопобсен в достаточной степени управлять временем, планировать и выполнять множество задач одновременно</li>
    </div>, 
},

{
    id: 8,
    img: education,
    ot:"Образование и социальная сфера", 
    pr:"Образование и социальная сфера, Дошкольное образование, Юриспруденция, Социально – культурная деятельность", 
    fil:"",
    zp: "",
    inf: "Совокупность отраслей, предприятий, организаций, непосредственным образом связанных и определяющих образ и уровень жизни людей, их благосостояние, потребление",
    species: 
    <div>
        <Link to='/specialty/18'>Дошкольное образование</Link>
        <Link to='/specialty/19'>Юриспруденция</Link>
        <Link to='/specialty/20'>Социально – культурная деятельность</Link>
    </div>,
    fits: 
    <div>
        <li>Способен выполнять свои обязанности качественно и в срок, соблюдать правила и нормы работы</li>
        <li>Способен налаживать доверительные отношения</li>
        <li>Умеет слушать и понимать собеседника, выражать свои мысли четко и корректно, находить компромиссы и решения</li>
    </div>, 
},

{
    id: 9,
    img: building,
    ot:"Строительство", 
    pr:"Строительство, Эксплуатация и обслуживание многоквартирного дома, Мастер отделочных строительных и декоративных работ, Мастер по ремонту и обслуживанию инженерных систем жилищно-коммунального хозяйства, Электромонтажник слаботочных систем, Землеустройство", 
    fil:"",
    zp: "",
    inf: "Представляет собой отдельную самостоятельную отрасль экономики, которая предназначена для ввода в действие новых, а также расширения, реконструкции, ремонта объектов производственного и непроизводственного назначения",
    species: 
    <div>
        <Link to='/specialty/21'>Эксплуатация и обслуживание многоквартирного дома</Link>
        <Link to='/specialty/22'>Мастер отделочных строительных и декоративных работ</Link>
        <Link to='/specialty/23'>Мастер по ремонту и обслуживанию инженерных систем жилищно-коммунального хозяйства</Link>
        <Link to='/specialty/24'>Электромонтажник слаботочных систем</Link>
        <Link to='/specialty/25'>Землеустройство</Link>
    </div>,
    fits: 
    <div>
        <li>Способен работать с различными инструментами, оборудованием и техническими схемами</li>
        <li>Способен разбираться в технических документах и схемах для выполнения задачи</li>
        <li>Способен точно выполнять инструкции и следить за качеством</li>
    </div>, 
},

]