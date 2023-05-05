import React from 'react'
import ContentBox from '../components/ContentBox'

export default function Staff() {
  return (
    <>
      <section className='content' style={{ marginBottom: '-80px' }}>
        <div className='block-header'>
          <div className='row'>
            <div className='col-lg-7 col-md-6 col-sm-12'>
              <h2>PROJECT INFO </h2><small className='text-muted'> MEMBERS AND USED TECNOLOGIES  </small>
            </div>
          </div>
        </div>
      </section>
      <ContentBox>
        <div className="row clearfix">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card">
              <div className="header">
                <h2><i className='zmdi zmdi-accounts'></i> DEVELOPERS <small> Staff: </small> </h2>
              </div>
              <div className="body table-responsive members_profiles">
                <table className="table table-hover table-sm small">
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'center' }}> <i className='zmdi zmdi-account-o'></i></th>
                      <th>  MEMBER </th>
                      <th> FUNCTION</th>
                      <th>PAPER</th>
                      <th>CONTACT</th>
                      <th>PROGRESS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img className="rounded-circle" src="assets/images/xs/anibal_atic_avatar_50x50.jpg" alt="user" width="40" /> </td>
                      <td>
                        <a href="javascript:void(0);">Aníbal Ferreira Filho</a>
                      </td>
                      <td>Analista de Sistemas</td>
                      <td>Analista/Desenvolvedor</td>
                      <td>

                        <div className="u_name">
                          <i className="c_name"> <i className="zmdi zmdi-email"></i> anibalgv@gmail.com</i>
                          <br />
                        </div>
                      </td>
                      <td>
                        <div className="progress" >
                          <div className="progress-bar l-green" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div className='ml-3'>
                <div className='card'>
                  <div className='header'>
                    <h2> <i className='zmdi zmdi-code-setting'></i> USED TECNOLOGIES   <small>OPEN SOURCE</small></h2>
                  </div>
                  <table className='table table-hover'>
                    <thead>
                      <th></th>
                      <th>DESCRIPTION</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><b>Geoserver</b></td>
                        <td>
                          O GeoServer é um Software livre, mantido pelo Open Planning Project, que permite o desenvolvimento de soluções de Webmapping, integrando diversos repositórios de dados geográficos com simplicidade e alta performance
                        </td>
                      </tr>
                      <tr>
                        <td><b>Node JS/JavaScript</b></td>
                        <td>
                          Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos
                        </td>
                      </tr>
                      <tr>
                        <td><b>React JS</b></td>
                        <td>
                          O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
                        </td>
                      </tr>
                      <tr>
                        <td><b>Leaflet</b> </td>
                        <td>
                          Leaflet é uma biblioteca JavaScript de código aberto usada para criar aplicativos de mapeamento da web. Lançado pela primeira vez em 2011, ele suporta a maioria das plataformas móveis e desktop, suportando HTML5 e CSS3. Entre seus usuários estão FourSquare, Pinterest e Flick
                        </td>
                      </tr>
                      <tr>
                        <td><b>OpenStreet Map</b></td>
                        <td>
                          OpenStreetMap é um projeto de mapeamento colaborativo para criar um mapa livre e editável do mundo, inspirado por sites como a Wikipédia. Traduzindo para português o nome significa Mapa Aberto de Ruas. Ele fornece dados a centenas de sites na internet, aplicações de celular e outros dispositivos
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <hr />
            <b>VERSAO</b> 0.2A
          </div>
        </div>
      </ContentBox>
    </>
  )
}
