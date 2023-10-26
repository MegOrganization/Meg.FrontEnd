import { FC, useState } from 'react'
import InputText from '../../components/InputText'
import InputTextCPF from '../../components/InputTextCPF'
import { AiOutlineUserAdd } from 'react-icons/ai'
import SubmitButton, { ESubmitButtonType } from '../../components/SubmitButton'
import clsx  from 'clsx'

const Usuario: FC = () => {
  const [genero, setGenero] = useState([
    'Homem',
    'Mulher',
    'Helicóptero XXX',
    'Ford Fiesta KA',
    'Liquidificador SuperBlender',
    'Piano de Cauda',
    'Relógio de Bolso Vintage',
    'Óculos de Sol Roxos',
    'Cafeteira Espresso Deluxe',
    'Quadro de Arte Abstrata',
    'Cachecol de Lã Alpaca',
    'Baralho de Cartas Mágicas',
    'Bicicleta de Montanha XTRail',
    'Notebook Quantum Pro',
    'Telescópio Espacial Celestron',
    'Tênis de Corrida Ultraleve',
    'Mochila para Acampamento',
    'Violão Acústico Amador',
    'Fogão a Gás de Luxo',
    'Chapéu Fedora Vintage',
    'Bolsa de Couro Genuíno',
    'Carro de Corrida Veloz',
    'Geladeira de Aço Inoxidável',
    'Sapatos de Dança de Salão',
    'Micro-ondas Avançado',
    'Chapéu de Cowboy Estiloso',
    'Caneta Tinteiro de Ouro',
    'Câmera DSLR Profissional',
    'Sofá de Couro Reclinável',
    'Bengala de Ébano Antiga',
    'Tablet de Última Geração',
    'Brinquedo Robô Inteligente',
    'Escova de Cabelo Elegante',
    'Chapéu de Pescador Vintage',
    'Máquina de Costura Antiga',
    'Barraca de Acampamento Familiar',
    'Bateria Eletrônica de Estúdio',
    'Guarda-chuva com Estampa Floral',
    'Máquina de Waffle Deliciosa',
    'Relógio de Pulso Analógico',
    'Mala de Viagem com Rodas',
    'Cadeira de Escritório Ergonômica',
    'Cinto de Couro Marrom',
    'Roteador Wi-Fi de Alta Velocidade',
    'Batedeira Planetária',
    'Fone de Ouvido sem Fio',
    'Impressora 3D de Mesa',
    'Livro de Poesia Moderna',
    'Robô Aspirador de Pó',
    'Lanterna LED Recarregável',
    'Mala de Ferramentas Profissionais',
    'Guitarra Elétrica Vintage',
    'Forno de Convecção',
    'Cadeira de Balanço de Madeira',
    'Cinto de Segurança para Cães',
    'Cafeteira Programável',
    'Máquina de Barbear Elétrica',
    'Ventilador de Torre Silencioso',
    'Teclado Mecânico para Jogos',
    'Bola de Basquete Oficial',
    'Cesto de Roupa Suja Dobrável',
    'Microfone Condensador de Estúdio',
    'Fogão a Lenha Tradicional',
    'Piscina Inflável Gigante',
    'Máquina de Sorvete Caseira',
    'Escultura de Arte Moderna',
    'Faqueiro de Prata Elegante',
    'Vara de Pescar de Fibra de Carbono',
    'Acordeon de Piano',
    'Balança de Cozinha Digital',
    'Relógio de Parede Vintage',
    'Capa de Chuva Transparente',
    'Kit de Ferramentas de Jardim',
    'Microscópio de Laboratório',
    'Guitarra Acústica de Viagem',
    'Furadeira sem Fio',
    'Lareira a Gás',
    'Piano Elétrico de Palco',
    'Óculos de Natação Profissionais',
    'Quadro Branco Magnético',
    'Mochila de Caminhada',
    'Teclado Eletrônico Portátil',
    'Máquina de Costura Portátil',
    'Bicicleta de Estrada de Carbono',
    'Conjunto de Facas de Cozinha',
    'Gaita de Boca Cromática',
    'Amplificador de Guitarra',
    'Cadeira de Rodas Motorizada',
    'Esqui Aquático e Aquaplanagem',
    'Microfone de Karaokê sem Fio',
    'Relógio de Pulso Esportivo',
    'Bengala de Caminhada Ajustável',
    'Máquina de Lavar Louça Inteligente',
    'Trampolim de Jardim',
    'Guitarra Clássica Espanhola',
    'Cafeteira French Press',
    'Tenda de Acampamento Pop-up',
    'Luminária de Piso Moderna',
    'Máquina de Cortar Cabelo',
    'Chapéu de Sol de Palha',
    'Mochila Térmica para Picnic',
    'Máquina de Waffle em Forma de Coração',
    'Bicicleta Elétrica Dobrável',
    'Máquina de Lavar e Secar',
    'Kit de Pintura a Óleo',
    'Bateria Acústica Profissional',
    'Rádio Antigo de Tubo'
  ])
  return (
    <div className='flex flex-1 flex-col m-5 p-5 bg-white border-2 border-quaternary rounded gap-4'>
      <form>
        <div className="flex items-center mb-2 text-secondary font-bold">
          <AiOutlineUserAdd className="mr-2" />
          <h1>Inserir Aluno</h1>
        </div>
        <div className="flex flex-col">
          <h4 className="text-secondary mb-2 ">Nome Aluno</h4>
          <InputText placeholder="Fulano da Silva" spellCheck={false}
            required type="text" validationMsg="Batata frita." />
        </div>
        <div className="flex flex-row gap-3">

          <div className="flex flex-1 flex-col">
            <h4 className={clsx('text-secondary mb-2')}>Data Nascimento</h4>
            <InputText placeholder="99/99/9999" spellCheck={false} type="date" />
          </div>

          <div className='flex flex-1 flex-col '>
            <h4 className='text-secondary mb-2'>Gênero</h4>
            <select className={clsx('flex bg-white border h-10 rounded pl-2')}>
              {genero.map(i => {
                return <option className="text-secondary" key={i}>{i}</option>
              })}
            </select>
          </div>

          <div className="flex flex-1 flex-col">
            <h4 className="text-secondary mb-2 ">Responsável</h4>
            <InputText placeholder="Ciclano de Tal" spellCheck={false} type="text" />
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex flex-1 flex-col">
            <h4 className="text-secondary mb-2 ">Email</h4>
            <InputText placeholder="fulano@detal.com" spellCheck={false} type="email" required />
          </div>

          <div className="flex flex-1 flex-col">
            <h4 className="text-secondary mb-2">CPF</h4>
            <InputTextCPF placeholder="CPF" spellCheck={false} type="text" required />
          </div>
        </div>
        <div className="flex flex-1 justify-end mr-2 mt-4">
          <SubmitButton className="w-20 h-11 mr-2" value="Resetar" type={ESubmitButtonType.reset} />
          <SubmitButton className="w-28 h-11" value="Confirmar" type={ESubmitButtonType.submit} />
        </div>
      </form>
    </div>
  )

}

export default Usuario;