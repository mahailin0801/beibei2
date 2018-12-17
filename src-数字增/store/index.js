//引入创建store 的方法
import {createStore} from 'redux';

//引入 reducers 文件
import reducers from './reducers'

//创建store 并且 createStore里面必须要传一个纯函数作为参数
const store = createStore(reducers);

//导出 store
export default store;

