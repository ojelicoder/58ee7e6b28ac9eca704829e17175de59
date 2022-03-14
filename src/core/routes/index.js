import path from './constants';
import List from '../../pages/List';
import ListDetail from '../../pages/ListDetail';

const route = [
    {
        path: path.LIST,
        component: List
    },
    {
        path: path.LISTDETAIL,
        component: ListDetail
    }
];

export default route;