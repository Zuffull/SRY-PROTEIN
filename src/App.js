import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <img src="/logo.png" alt="Sky Protein Logo" className="logo" />
        <h1>ЗАВОД З ПЕРЕРОБКИ СОЄВИХ БОБІВ</h1>
        <h2>Україна, Львівська обл., Червоноградський р-н, м. Сокаль, вул. Яворницького, буд. 105</h2>
        <h3>info@skyprotein.vet</h3>
        <h4>+38 (067) 67 67 67 6</h4>
        <button>UA</button>
        <button>EN</button>
      </div>
      <div className="content">
        <div className="content__item">
          <h1>Про нас</h1>
          <p>Наша компанія займається професійною переробкою сої, забезпечуючи якісну продукцію для тваринництва та рибних господарств.</p>
          <p>Ми закуповуємо сою у перевірених постачальників, зокрема у фермерських господарств Івано-Франківської, Тернопільської, Рівненської та Вінницької областей.</p>
          <img src="/2 (1).png" alt="IMG" className="second" />
          <img src="/2 (2).png" alt="IMG" className="second" />
          <img src="/2 (3).png" alt="IMG" className="second" />
        </div>

        <div className="content__item">
          <h1>Наші можливості</h1>
          <p>Щодня ми переробляємо 50-60 тонн сої, що дозволяє нам безперебійно працювати протягом усього року.</p>
          <p>З кожної тонни сої ми отримуємо:</p>
          <p>120 кг соєвої олії</p>
          <img src="3(1).png" alt="IMG" className="three" />
          <p>800 кг макухи</p>
          <img src="3(2).png" alt="IMG" className="three" />
          </div>

          <div className="content__item">
          <h1>Сфера застосування</h1>
          <p>Наша продукція використовується у:</p>
          <p>Птахівництві</p>
          <img src="4(1).png" alt="IMG" className="four" />
          <p>Свиноводстві</p>
          <img src="4(2).png" alt="IMG" className="four" />
          <p>Рибному господарстві</p>
          <img src="4(3).png" alt="IMG" className="four" />
          </div>

          <div className="content__item">
          <h1>Процес виробництва</h1>
          <p>Переробка сої розпочинається з розвантаження сировини у завальну яму, після чого вона проходить процес сушіння, очищення та подальшої обробки для отримання кінцевого продукту – макухи та соєвої олії.</p>
          <img src="5(1).png" alt="IMG" className="five" />
          <img src="5(2).png" alt="IMG" className="five" />
          <img src="5(3).png" alt="IMG" className="five" />
          </div>

          <div className="content__item">
          <h1>Закупівля сировини</h1>
          <p>Ми постійно закуповуємо сою та відкриті до співпраці з новими постачальниками. Якщо у вас є пропозиції – зв'яжіться з нами:</p>
          <p>📞 +380932583050</p>

          <p>Запишіть нам повідомлення :)</p>
          
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
      </div>
  );
}

export default App;
