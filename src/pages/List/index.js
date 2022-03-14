import './list.scss';
import { useState, useEffect } from 'react';
import { GET_PRODUCTLIST } from '../../core/utils/requests';
import Pagination from '../../components/Pagination';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const List = () => {
    const [page, setPage] = useState(1),
    [totalPage, setTotalPage] = useState(0),
    [productList, setProductList] = useState([]),
    [loading, setLoading] = useState(true),
    [listData, setListData] = useState([]),
    [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        GET_PRODUCTLIST().then(response => {
            const { data } = response,
            productList = data.products;
            setLoading(false);
            setProductList(productList);
        }).catch(err => {
            console.error(err.toString())
        });
    }, []);

    useEffect(() => {
        const list = searchResults.length > 0 ? searchResults : productList;
        paginationCalc(list)
    }, [productList, page]);

    const paginationCalc = (product) => {
        const perPage = 10,
        totalPage = Math.ceil(product.length / perPage);
        let pageValue = page;

        if(pageValue > totalPage) pageValue = totalPage;

        const start = (pageValue -1) * perPage,
        end = pageValue * perPage;

        setListData(product.slice(start, end));
        setTotalPage(totalPage);
    },

    searchProducts = (value) => {
        const searchProducts = productList.filter(item => {
            if(value === ''){
                return item
            }else if (item.title.toLowerCase().includes(value.toLocaleLowerCase())){
                return item
            }
        });
        setSearchResults(searchProducts);
        paginationCalc(searchProducts)
    };

    return(
        <div className='container'>
            <div className='products'>
                {loading ? <Loading/> : 
                <>
                    <div className='products__filter--wrapper'>
                        <input type='text' className='products__filter' placeholder='Search...' onChange={(e) => searchProducts(e.target.value)}/><FontAwesomeIcon className='products__filter--icon' icon={faMagnifyingGlass} />
                    </div>
                    {listData.length > 0 ? listData.map(item => {
                        return(
                            <Link className='products__item' key={item.id} to={'/detail'} state={{product: item}}>
                                <div className='products__item--title'>{item.title}</div>
                                <div className='products__item--pricetag'>
                                    <span className='products__item--price'>&#36;{item.variants[0].price}</span>
                                    {item.variants[0].compare_at_price !== null &&
                                        <small className='products__item--oldprice'>&#36;{item.variants[0].compare_at_price}</small>
                                    }
                                </div>
                            </Link> 
                            )
                        }) : <div className='products__noresult'>No result...</div>
                    }
                </>}
            </div>
            {listData.length > 0 &&
            <Pagination
                totalPage={totalPage}
                page={page}
                setPage={setPage}
            />
            }
        </div>
    )
}

export default List;