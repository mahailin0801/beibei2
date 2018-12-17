import React,{Component} from "react";

//关于react-redux 的第二个属性的使用
import {connect} from 'react-redux';

class List extends Component{
    render(){
    	let {todoList} = this.props;
        return (
            <div>
              	<ul>
              	{
              		todoList.map((item,index)=>{
              			return <li key={index}>{item}
              			<button onClick={this.props.handleModify.bind(this,index)}>修改</button>
              			<button onClick={this.props.handleDel.bind(this,index)}>删除</button>
              			</li>
              		})
              	}
              		
              	</ul>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
	 todoList: state.todoList
})

const mapDispatchToProps=(dispatch,props)=>({
	handleModify(index){
		let action={
			type:"MODIFY_ITEM",
			value:index
		}
		dispatch(action);
		props.history.push("./order")
	},
	handleDel(index){
		let action = {
			type:"DEL_ITEM"
		}
		dispatch(action)
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(List)