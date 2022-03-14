import './ListDetail.scss';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const ListDetail = () => {
    const { state } = useLocation(),
    product = state.product;

    useEffect(() => {
        console.log(state)
    })

    return(
        <div className='detail'>
            <div className='container'>
                <Link to="/" className='detail__return'><FontAwesomeIcon icon={faArrowLeftLong} /> Go to list</Link>
                <div className='detail__product'>
                    <div className='detail__product--img--wrapper'>
                        <img className='detail__product--img' src={product.images[0].src} alt={state.title}/>
                    </div>
                    <div className='detail__product--info'>
                        <h3 className='detail__product--title'>{product.title}</h3>
                        <span className='detail__product--price'>&#36;{product.variants[0].price}</span>
                        {product.variants[0].compare_at_price !== null &&
                            <small className='detail__product--oldprice'>&#36;{product.variants[0].compare_at_price}</small>
                        }
                        <div className='detail__product--info--body' dangerouslySetInnerHTML={{__html: product.body_html}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListDetail;