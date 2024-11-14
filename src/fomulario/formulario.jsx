import 'bootstrap/dist/css/bootstrap.min.css';
import './formulario.css'
import { useState } from 'react';

export default function FormImc() {
    const [nome, setNome] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const calcularImc = () => {
            if (peso && altura) {
                const alturaEmMetros = altura / 100;
                const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
                setImc(imcCalculado.toFixed(2));
                setClassificacao(classificarImc(imcCalculado));
            }
        };

        calcularImc();
    };

    const classificarImc = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
        if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
        if (imc >= 30 && imc < 34.9) return 'Obesidade grau I';
        if (imc >= 35 && imc < 39.9) return 'Obesidade grau II';
        return 'Obesidade grau III';
    };

    const handleClear = () => {
        setNome('');
        setAltura('');
        setPeso('');
        setImc(null);
        setClassificacao('');
    };


    return(
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1>Calcule seu IMC</h1>
                    <form onSubmit={handleSubmit}>
                        <input className="form-control" type='text'  placeholder='Digite se nome' value={nome} onChange={(e)=> setNome(e.target.value)}/>
                        <input className="form-control my-2" type='number' placeholder='Digite seu peso' value={peso} onChange={(e) => setPeso(e.target.value)}/>
                        <input className="form-control" type='number'  placeholder='Digite sua Altura' value={altura} onChange={(e) => setAltura(e.target.value)}/>
                        <button type="submit" className='btn btn-primary mt-3'>Enviar</button>
                        <button type="button" className='btn btn-secondary mt-3 ms-2' onClick={handleClear}>Limpar</button>
                    </form>

                    {imc && (
                        <div className='mt-5'>
                            <h2>Nome: {nome}</h2>
                            <h2>Resultado: {imc}</h2>
                            <h3>Classificação: {classificacao}</h3>
                        </div>
                    )}

                </div>
            </div>
            
        </div>
    );
};