import React from 'react'

export default function CaseStudy(){
  return (
    <section>
      <div className="container two-col">
        <div>
          <div className="framed">
            <img src={`${import.meta.env.BASE_URL}caseindisa.jpg`} alt="Case: Indisa." style={{width:'100%',maxWidth:600}}/>
          </div>
        </div>
        <div className="text-max">
          <div className="h5">CONHEÇA NOSSO CASE DE SUCESSO!</div>
          <div className="mt-16"></div>
          <h2>PROBLEMA DE GESTÃO DE ESTOQUE</h2>
          <div className="mt-16"></div>
          <p>
            Dores do Cliente: Inconsistencia dos dados • Perda de produtividade buscando dados • Atrasos por falta de comunicação clara entre os setores.
          </p>
          <div className="mt-16"></div>
          <p>
            Solução da TaskByte foi criar um sistema gerenciamento de garantias, que controla o lançamento, análise e alguns indicadores referentes aos itens.
          </p>
          <div className="mt-16"></div>
          <p>
            Resultado: Melhor comunicação • 58% mais produtividade • Menos perda de dados • Melhora na apresentação dos dados.
          </p>
        </div>
      </div>
    </section>
  )
}

