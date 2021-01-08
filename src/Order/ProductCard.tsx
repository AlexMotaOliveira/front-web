import { ReactComponent as PizzaIcon } from './pizza.svg'

function ProductsCard() {
  return (
    <div className="order-card-container">
      <h3 className="order-card-title">
        Pizza calabresa
      </h3>
      <PizzaIcon className="order-card-image" />
      <h3 className="order-card-price">
         RS 35,90.
      </h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>
          Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial.
         </p>
      </div>
    </div>
  )
}

export default ProductsCard