import React,{Component} from 'react';

//关于react-redux 的第二个属性的使用
import {connect} from 'react-redux';

class Home extends Component{
	render(){
		let {inputVal} = this.props
		return (
			<div>
				<input type="text" 
				value={inputVal}
				onChange={this.props.handleChange}/>
				<button onClick={this.props.handleAdd}>添加</button>
			</div>
		)
	}
}
const mapStateToProps=(state)=>({
	 inputVal: state.inputVal
})

const mapDispatchToProps=(dispatch,props)=>({
	handleChange(e){
		let val = e.target.value;
		let action={
			type:"INPUT_CHANGE",
			value:val
		}
		dispatch(action)
	},
	handleAdd(){
		let action = {
			type:"ADD_ITEM"
		}
		dispatch(action);
		props.history.push("./list")
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)


/*
connect是用来链接当前组件与store
第一个括号里面有2个参数
第一个参数是：mapStateToProps
第二个参数是：mapDispatchToProps

第二个括号里面有1个参数
当前组件的名称
 */