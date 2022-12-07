import { useState } from 'react';

function App() {
    const [city, setCity] = useState('')
    const [previsao, setPrevisao] = useState(null)

    const pesquisarPrevisao = () => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=8062c0ddde0c4bcb89b181822220712&q=${city}&lang=pt`)
        .then((res) => {
            if(res.status === 200){
                return res.json()
            }
        })
        .then((data) => {
            console.log(data)
            setPrevisao(data)
        })
    }

  return (
    <div className="App">
        <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
            <a className='navbar-brand' href='#top'>
                Previsão do Tempo
            </a>
        </nav>
        <main className='container'>
            <div className='jumbutron'>
                <h1>
                    Verifique agora a previsão do tempo da sua cidade!
                </h1>
                <p className='lead'>
                    Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar
                </p>

                <div className='row mb-4'>
                   <div className='col-md-6'>
                    <input className='form-control' onChange={e => setCity(e.target.value)} value={city}/>
                    </div> 
                </div>

                <button className='btn btn-primary btn-lg' onClick={() => pesquisarPrevisao()}>
                    Pesquisar
                </button>

                {previsao &&
                    <div>
                        <div className='mt-4 d-flex align-itens-center'>
                            <div>
                                <img src={previsao?.current?.condition?.icon} alt='Icon'/>
                            </div>
                            <div>
                                <h3>Hoje o dia está: {previsao.current.condition.text}</h3>
                                <p className='lead'>Temp: {previsao.current.temp_c}</p>
                            </div>
                        </div>
                    </div>}
            </div>
        </main>
    </div>
  );
}

export default App;
