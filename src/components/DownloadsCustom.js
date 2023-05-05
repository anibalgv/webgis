import React from 'react'
import { Link } from 'react-router-dom';
import ContentBox from './ContentBox';

export default function DownloadsCustom() {
  return <>
    <ContentBox>
      {/* CABECALHO */}
      <div className="card">
        <div className="header">
          <h2><i className='zmdi zmdi-bookmark-outline'></i> [CATALOGO NOME] <small> FONTE DOS DADOS: <Link to='https:/executar.net' target={'_blank'}> https:/executar.net </Link></small>
          </h2>
        </div>
      </div>
      {/* CONTEUDO */}
      <div className='col-12'>
        <table className="table table-hover table-sm small">
          <thead>
          </thead>
          <tbody>
            {/* LINHA */}
            <tr className='table table-sm'>
              <td width={'100%'}> <i className='zmdi zmdi-caret-right mr-2'></i>  [TITULO DA CAMADA] </td>
              <td>
                <span style={{ display: 'block' }}>
                  <Link to="#[METADADO_URL]" target={'_blank'} className='badge small btn-sm small bg-light-green  btn-block btn-xs waves-effect'> <i className='zmdi zmdi-file-text'></i> METADADO </Link>
                </span>
              </td>
              <td> <Link to='#[SHAPE_URL]' target='_blank' className='badge small btn-sm small bg-cyan  btn-block btn-xs waves-effect'> <i className='zmdi zmdi-shape'></i> SHAPE </Link> </td>
              <td><Link to='#[KML_URL]' target='_blank' className='badge small btn-sm small  bg-pink btn-block btn-xs waves-effect'> <i className='zmdi zmdi-code'></i> KML </Link> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ContentBox>
  </>
}

