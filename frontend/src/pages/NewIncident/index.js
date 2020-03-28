import React ,{useState}from 'react'
import './style.css'
import logoImg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi'
import {Link,useHistory} from 'react-router-dom'
import api from '../../services/api'

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescrition] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')

  const history = useHistory();

  async function handleNewIncident(e){
    e.preventDefault();

    const data = {
      title,
      description,
      value
    }

    try{
      await api.post('casos', data, {
        headers:{
          Authorization : ongId,
        }
      })

      history.push('/profile');
    }catch(err){
      alert('Erro ao cadastrar caso')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar o herói para resolver isso.</p>
          
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para home
          </Link>
        </section>
        <form>
          <input 
            value={title}
            onChange={e => setTitle(e.target.value)} 
            placeholder="Título do caso"
          />

          <textarea 
            value={description}
            onChange={e => setDescrition(e.target.value)}
            placeholder="Descrição"
          />

          <input 
            value={value}
            onChange={e => setValue(e.target.value)} 
            placeholder="Valor em reais"
          />

          <button onClick={handleNewIncident} className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}