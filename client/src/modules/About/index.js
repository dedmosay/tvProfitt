import React from "react";

import "./style.scss";

/*Компания “Профитт” специализируется на разработке высококачественного профессионального телевизионного и оптического оборудования.
  Наше оборудование работает в ведущих телецентрах и телестудиях России и СНГ.*/
export default function About(props) {
  return (
    <div className="About">
      <div className="about">
        <div className="about__container">
          <div class="timeline">
            <div class="container left">
              <div class="content">
                <h2>2019</h2>
                <div>
                  <p>Разработка и запуск в серию:</p>
                  <p>
                    {" "}
                    - устройства камерного оптического канала для организации
                    двунаправленной передачи видео 3G/HD/SD SDI, служебной
                    связи, аудио и удаленного управления видеокамерами и другими
                    роботизированными объектами
                  </p>
                  <p>
                    {" "}
                    - процессоры мультиэкрана на 8 входов с IP, SDI и HDMI
                    выходами; аудио интерфейс Ethernet ('ProBox')
                  </p>
                  <p>
                    {" "}
                    - кодеры MPEG; сплайсеры; медиаконвертор/коммутатор Ethernet
                    4-х портовый 10/100/1000 Мбит: оптические аварийные
                    коммутаторы ('PROFNEXT').
                  </p>
                  <p>
                    {" "}
                    Разработка устройства камерного оптического канала
                    PFC-01/PFB-02 отмечена СПЕЦПРИЗОМ премии имени Владимира
                    Зворыкина, за достижения в области развития телевидения, в
                    номинации:{" "}
                  </p>
                  <p>
                    - за достижения в области телекоммуникационных технологий и
                    связи.
                  </p>
                </div>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>2018</h2>
                <div>
                  <p>Разработка и запуск в серию:</p>
                  <p>
                    - cервер потокового вещания H.264 (стример) с функцией
                    записи, кодер H.264 AVC HD/SD SDI автономный малогабаритный
                    модуль 'ProBox'
                  </p>
                  <p>
                    - формирователи мультиэкрана (Multiscreen) - блок модульной
                    системы 'PROFNEXT'
                  </p>
                  <p>
                    - преобразователи аудио в интерфейс локальной сети передачи
                    аудио Dante или AES67
                  </p>
                </div>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2>2017</h2>
                <div>
                  <p>Разработка и запуск в серию:</p>
                  <p>
                    - NTP сервер с приемником GPS/GLONASS и генератором LTC,
                    1PPS, 10МГц PNTP-5021
                  </p>
                  <p>
                    - многоканальных оптических передатчиков, приёмников и
                    трансиверов цифровых HD/SD SDi, ASI сигналов с электрическим
                    уплотнением (TDM)
                  </p>
                  <p>- блок модульной системы 'PROFNEXT'</p>
                </div>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>2016</h2>
                <div>
                  <p>Разработка и запуск в серию:</p>
                  <p>
                    - устройства автоматического резервирования синхросигналов и
                    испытательных сигналов синхрогенераторов
                  </p>
                  <p>- автономных малогабаритных модулей 'ProBox'</p>
                </div>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2>2015</h2>
                <div>
                  <p>Разработка и запуск в серию: </p>
                  <p>
                    - нормализаторов уровня громкости звука (ALC) в аналоговых и
                    цифровых звуковых сигналах и в сигналах HD/SD SDI;{" "}
                  </p>
                  <p>- HD/SD SDI эфирного микшера;</p>
                  <p>Разработка новой модульной системы 'PROFNEXT'</p>
                  <p>
                    Номинант национальной премии имени Владимира Зворыкина за
                    создание и/или усовершенствование оборудования/технологии в
                    области телерадиопроизводства:
                  </p>
                  <p>
                    - за принципиально новую универсальную систему нормализации
                    громкости звука (ALC) для телевизионных, радио и звуковых
                    студий
                  </p>
                  <p>
                    - за принципиально новый HD SDI эфирный микшер PDMX-2106
                  </p>
                </div>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>2014</h2>
                <div>
                  <p>Начало серийного выпуска:</p>
                  <p>
                    - многоканальных преобразователей звуковых сигналов с
                    регулируемой задержкой (АЦП, ЦАП, линии задержки);
                  </p>
                  <p>
                    - 'смарт' резерваторов сигналов ASI электрических и
                    оптических на базе модульной системы 'PROFLINK';
                  </p>
                  <p>- 4 -х канальных кейеров сигналов HD/SD SDI;</p>
                  <p>
                    - логогенератор 3G/HD/SD SDI статических, динамических,
                    текстовых логотипов и 'бегущих строк';
                  </p>
                </div>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2>2013</h2>
                <div>
                  <p>Начало серийного выпуска: </p>
                  <p>
                    - профессионального MPEG4 (H.264/AVC) кодера/транскодера
                    MPEG2 MPEG4 (H.264/AVC)
                  </p>
                  <p>
                    Награждение на выставке NATEXPO 2013 Дипломом номинанта
                    Премии имени Владимира Зворыкина:{" "}
                  </p>
                  <p>
                    - за разработку и производство модульной системы компактных
                    оптических преобразователей "PROFLINK" и матричных
                    коммутаторов серии 256x1 3G/HD/SD SDI, ASI.
                  </p>
                </div>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>2012</h2>
                <div>
                  <p>Начало серийного выпуска:</p>
                  <p>
                    - матричных коммутаторов серии 256Х1, поддерживающих
                    3G/HD/SD SDI, ASI форматы
                  </p>
                </div>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2>2011</h2>
                <div>
                  <p>Изготовление и поставка серии комплексов (1000 штук)</p>
                  <p>
                    - обработки избирательных бюллетеней для Центризберкома, для
                    участия в выборах президента России 4 марта 2012 года.
                  </p>
                </div>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>2010</h2>
                <div>
                  <p>
                    Совместно с ОАО 'ЛОМО' разработка нового комплекса обработки
                    избирательных бюллетеней для Центризбиркома.
                  </p>
                </div>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2>2009</h2>
                <div>
                  <p> Начало серийного выпуска:</p>
                  <p>
                    - вещательных 'смарт' видеоаудиорезерваторов сигналов SDI;
                  </p>
                  <p>
                    - преобразоателей стандарта разложения и формата кадра SD/HD
                    SDI (кросс-конверторы двадцати стандартов).
                  </p>
                </div>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>2008</h2>
                <p>Начало серийного выпуска:</p>
                <p>
                  - оборудования HDSDI (оптических передатчиков, приёмников,
                  усилителей-распределителей, синхрогенераторов и т. д.);
                </p>
                <p>
                  - многоканальных оптических передатчиков и приёмников SDI,
                  DVB-ASI с электрическим временным уплотнением (TDM);
                </p>
                <p>
                  - цифровых эфирных видео-аудиомикшеров PDMX-2006 и PDMX-2007;
                </p>
                <p>
                  Реализация на телеканале 'ТВ Центр' проекта по полной замене
                  устаревшего оборудования волоконно-оптических линий связи на
                  оборудование ООО 'ПРОФИТТ'.
                </p>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2>2007</h2>
                <div>
                  <p>
                    Победа в конкурсе головного и распределительного
                    оборудования для сетей распространения ТВ сигналов,
                    проводимом в рамках международной выставки CSTB-2007 в
                    номинациях:
                  </p>
                  <p>- за интересное техническое решение; </p>
                  <p>- за перспективность; </p>
                  <p>
                    - за комплекс оборудования для преобразования электрических
                    видео, звуковых и служебных сигналов в оптические и обратно
                    для одноканальной и многоканальной передачи и приёма
                    оптических сигналов по одному одномодовому волокну.
                  </p>
                </div>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>2006</h2>
                <p>
                  Начало серийного выпуска: вещательных видеоаудио PRVA-4063 и
                  аудиорезерваторов PRAA-4065, учитывающих особенности цифровых
                  каналов связи.
                </p>
                <p>
                  Выигрыш тендера и поставка серии видеоаудио и
                  аудиорезерваторов в центр междугородней связи РУП
                  'Белтелеком'г. Минск, Республика Беларусь. Поставка
                  коммутационно - распределительного аналогового и цифрового
                  оборудования для ПрессЦентра Правительства дома Правительства
                  России на базе коммутаторов 32х32, г. Москва. Обеспечение ТРК
                  '5 канал' (г. Санкт- Петербург) вещательным оборудованием для
                  организации Федерального вещания.
                </p>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2>2005</h2>
                <div>
                  <p>
                    Серийный выпуск цифрового блока электронной рир-проекции
                    PDCC-1110.{" "}
                  </p>
                  <p>
                    {" "}
                    Разработка и поставка коммутационно-распределительного
                    комплекса звуковых и телевизионных программ в центр
                    междугородней связи РУП 'Белтелеком' г. Минск, Республика
                    Беларусь.
                  </p>
                </div>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>2004</h2>
                <div>
                  <p>
                    Серийный выпуск цифрового мультистандартного 6-ти входового
                    эфирного видео- аудиомкшера PDMX-2004 и датчиков точного
                    времени PTT-096(GPS приёмник) и температуры PTC-095.
                  </p>
                  <p>Модернизация ТРК '5 канал' г. Санкт-Петербург.</p>
                  <p>
                    Разработка, изготовление и ввод в эксплуатацию комплекса
                    оборудования для коммутации и распределения аналоговых и
                    цифровых сигналов видео и звукового сопровождения главного
                    центра управления международными связями и телевидением
                    (ГЦУМС) ОАО 'Ростелеком' на базе модульных коммутаторов
                    64х64 аналоговых и цифровых видео- (SDI/ASI, PAL/SECAM, YUV,
                    YC) и одноканальных и двухканальных аналоговых аудиосигналов
                    (г. Москва 2004 год).{" "}
                  </p>
                  <p>
                    Лауреат выставки CSTB-2004 в номинации за лучшую
                    отечественную (Россия, страны СНГ, Балтии) разработку
                    (оборудование ) для телевидения за видео- аудиомикшер
                    PDMX-1016;
                  </p>
                </div>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2>2003</h2>
                <div>
                  <p>
                    Серийный выпуск цифрового мультистандартного 16-ти входового
                    эфирного видео- аудиомкшера PDMX-1016.{" "}
                  </p>
                  <p>
                    Первое место в номинации за лучшую отечественную (Россия,
                    страны СНГ, Балтии) разработку (оборудование ) для
                    телевидения на конкурсе проводимом в рамках международной
                    выставки CSTB-2003 за модульную систему 'PROFLEX'.
                  </p>
                  <p>
                    Серийный выпуск одноканальных и многоканальных оптических
                    систем передачи сигналов SDI, DVB-ASI, PAL/SECAM, аналоговых
                    и цифровых AES/EBU аудиосигналов и данных RS232/RS422/RS485.
                  </p>
                </div>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>2002</h2>
                <div>
                  <p>
                    Выпуск мультистандартного цифрового видео-аудиопроцессора
                    PVDP-1005, оптимизированного для бесподрывного ввода в
                    проходящий видеосигнал рекламы, символьных и графических
                    логотипов и 'бегущей строки'.
                  </p>
                </div>
              </div>
            </div>

            <div class="container left">
              <div class="content">
                <h2>2001</h2>
                <div>
                  <p>
                    Участие в разработке и поставке оборудования для первой в
                    России цифровой малой ПТС.
                  </p>
                  <p>
                    Совместная с ОАО 'ЛОМО' разработка комплекса обработки
                    избирательных бюллетеней для Центризбиркома.
                  </p>
                </div>
              </div>
            </div>

            <div class="container right">
              <div class="content">
                <h2>2000</h2>
                <div>
                  <p>
                    Разработка комплекса ТВ вещания для трансляций Чемпионата
                    мира по хоккею-2000.{" "}
                  </p>
                  <p>
                    Поставка коммутационно-распределительного оборудования для
                    дворца спорта 'Юбилейный' и Ледового дворца (г.
                    С-Петербург).{" "}
                  </p>
                  <p>Выпуск компонентного эфирного микшера PMX-2003VC.</p>
                  <p>
                    Разработка собственных цифровых 10-ти разрядных кодеров,
                    декодеров PAL/SECAM. Создание модульных систем 'КРАБ' и
                    'PROFLEX' (2000-2001 гг.)
                  </p>
                </div>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2>1999</h2>
                <p>
                  Выпуск многостандартного 10-ти разрядного
                  транскодера-синхронизатора PSC-1081.
                </p>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>1997</h2>
                <div>
                  <p>
                    Разработка и поставка цифровых 10-ти разрядных кодеров SECAM
                    для фирмы 'Scientific Atlanta', Канада .
                  </p>
                </div>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2>1996</h2>
                <p>
                  Разработка коммутатора видео и аудио большого объема (64х64).
                  Участие в модернизации коммутационной аппаратной центра
                  междугороднего телевидения (ЦМТ) ОАО 'РОСТЕЛЕКОМ', г.
                  Санкт-Петербург.
                </p>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>1995</h2>
                <div>
                  <p>
                    Начало выпуска коммутаторов видео и звука 8х8 PVS-071 и
                    PSS-073
                  </p>
                  <p>
                    Выпуск кадрового синхронизатора SECAM PSY-081 и
                    цветокорректора PCC-051
                  </p>
                </div>
              </div>
            </div>
            <div class="container left">
              <div class="content">
                <h2>1993 - 1994</h2>
                <div>
                  <p>
                    Разработка и начало выпуска новых шести наименований
                    аналоговых блоков:
                  </p>
                  <p>- матрица RGB YUV PMR-061</p>
                  <p>- матрица YUV RGB PMR-062</p>
                  <p>- транскодер SECAM - PAL PTC-002</p>
                  <p>- транскодер PAL - SECAM PTC-014</p>
                  <p>
                    - усилитель-распределитель видео с корректором кабеля
                    PCA-063
                  </p>
                  <p>- кодер SECAM с входом S-VHS PTC-013.</p>
                </div>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <h2>1992 - 1993</h2>
                <div>
                  <p>Разработка и начало выпуска</p>
                  <p>Аналоговых блоков студийного оборудования: </p>
                  <p>- кодер SECAM PSE-012</p>
                  <p>- декодер SECAM PSD-022</p>
                  <p>- декодер PAL PPD-032</p>
                  <p>
                    - преобразователь компонентных сигналов YUV YD /D PTR-041
                  </p>
                  <p>
                    Выпуск первого в бывшем СССР кодера PAL РРЕ-001 на
                    элементной базе общего применения с параметрами на уровне
                    лучших мировых образцов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
