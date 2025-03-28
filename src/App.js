import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <img src="/ГОЛОВНЕ ЗОБРАЖЕННЯ.png" alt="Sky Protein Logo" className="logo-page" />
        <img src="/logo.png" alt="Sky Protein Logo" className="logo" />
        <h1>ЗАВОД З ПЕРЕРОБКИ СОЄВИХ БОБІВ</h1>
        <h2>Україна, Львівська обл., Червоноградський р-н, м. Сокаль, вул. Яворницького, буд. 105</h2>
        <h3>info@skyprotein.vet</h3>
        <h4>+380 66 544 07 01</h4>
        <button className='button1'>UA</button>
        <button className='button2'>EN</button>
      </div>
      <div className="content">
        <div className="content__item1">
          <p1>ПРО НАС</p1>
          <button className='button5'>МИ ПРОПОНУЄМО</button>
          <button className='button6'>КОНТАКТИ</button>
          <p> Наша компанія займається професійною переробкою сої, забезпечуючи якісну продукцію для тваринництва та рибних господарств.</p>
          <p>Ми закуповуємо сою у перевірених постачальників, зокрема у фермерських господарств Івано-Франківської, Тернопільської, Рівненської та Вінницької областей.</p>
          <img src="/2 (1).png" alt="IMG" className="second1" />
          <img src="/2 (2).png" alt="IMG" className="second2" />
          <img src="/2 (3).png" alt="IMG" className="second3" />
        </div>

        <div className="content__item2">
          <h1>Наші можливості</h1>
          <p1>Щодня ми переробляємо 50-60 тонн сої, що дозволяє нам безперебійно працювати протягом усього року.</p1>
          <p2>З кожної тонни сої ми отримуємо:</p2>
          <p3>120 кг соєвої олії</p3>
          <img src="3(1).png" alt="IMG" className="three1" />
          <p4>800 кг макухи</p4>
          <img src="3(2).png" alt="IMG" className="three2" />
          </div>

          <div className="content__item3">
          <h1>Сфера застосування</h1>
          <p1>Наша продукція використовується у:</p1>
          <p2>Птахівництві</p2>
          <img src="4(1).png" alt="IMG" className="four1" />
          <p3>Свиноводстві</p3>
          <img src="4(2).png" alt="IMG" className="four2" />
          <p4>Рибному господарстві</p4>
          <img src="4(3).png" alt="IMG" className="four3" />
          </div>

          <div className="content__item4">
          <h1>Процес виробництва</h1>
          <p>Переробка сої розпочинається з розвантаження сировини у завальну яму, після чого вона проходить процес сушіння, очищення та подальшої обробки для отримання кінцевого продукту – макухи та соєвої олії.</p>
          <img src="5(1).png" alt="IMG" className="five1" />
          </div>

          <div className="content__item5">
          <h1>Закупівля сировини</h1>
          <p>Ми постійно закуповуємо сою та відкриті до співпраці з новими постачальниками. Якщо у вас є пропозиції – зв'яжіться з нами:</p>
          <p2>📞 +380932583050</p2>

          <form action="mailto:info@skyprotein.vet" method="post" encType="text/plain">
            <label htmlFor="name">Ваше ім'я:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Ваш email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Ваше повідомлення:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            
            <button type="submit">Надіслати</button>
          </form>
          </div>

        </div>
        <overlay className="overlay"> </overlay>
      </div>
  );
}

export default App;
