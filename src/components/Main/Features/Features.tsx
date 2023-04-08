import './Features.scss';

export const Features = () => {
  return (
    <div id='features' className='features'>
      <h1 className='features__title'>Features</h1>
      <div className="features__box-card">
        <div className="features__card">
          <p className="features__name">Шиммер ROBEAUTY робить шкіру сексуальною</p>
        </div>
        <div className="features__card">
          <p className="features__name">Пом'якшує та зволожує шкіру</p>
        </div>
        <div className="features__card">
          <p className="features__name">Маскує недоліки шкіри</p>
        </div>
        <div className="features__card">
          <p className="features__name">Дає найкрасивіше сяйво серед усіх шимерів</p>
        </div>
        <div className="features__card">
          <p className="features__name">Він добре зволожує шкіру, бо містить масла:
Макадамії, Авокадо, Мигдальне</p>
        </div>
        <div className="features__card">
          <p className="features__name">У складі тільки натуральні компоненти</p>
        </div>
      </div>
    </div>
  );
};



