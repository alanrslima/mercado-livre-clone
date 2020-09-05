import React from 'react';
import tshirtImage from '../../assets/tshirt.png';
import { Container, Row, Gallery, Column, Panel, Section, Description } from './styles';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';


const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="/">Compartilhar</a>
        <a href="/">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />
          <WarrantySection></WarrantySection>
          <WarrantySection></WarrantySection>
        </Column>
      </Panel>
    </Container>
  )
}

const WarrantySection: React.FC = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem ipsum</p>
        <p className="description">Receba o produto que esta esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="/">Saiba mais sobre garantia</a>
  </Section>
)

const Info: React.FC = () => (
  <Description>
    <h2>Decsrição</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque culpa quis repellendus quo nam nihil, suscipit sequi, perferendis, laudantium ea sit exercitationem? Quas doloremque dolor iusto corporis, natus sequi delectus?</p>
    <br />
    <br />
    Itens inclusos: <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate alias similique illo rem velit quae! Cum quasi omnis totam consequuntur veniam. Doloremque ex, tempora autem ipsum asperiores quas obcaecati incidunt.
  </Description>
)

export default Product;
