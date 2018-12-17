import React,{Component} from 'react';

//关于react-redux 的第二个属性的使用
import {connect} from 'react-redux';

class Home extends Component{
	render(){
		let {num} = this.props
		return (
			<div>
				<p>{num}</p>
				<button onClick={this.props.handleAddNum}>增加</button>
			</div>
		)
	}
}
const mapStateToProps=(state)=>({
	num : state.n
})

const mapDispatchToProps=(dispatch)=>({
	handleAddNum(){
		let action = {
			type:"ADD_NUMBER"
		}
		dispatch(action)
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