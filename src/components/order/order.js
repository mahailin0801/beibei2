import React, { Component } from "react";

//关于react-redux 的第二个属性的使用
import {connect} from 'react-redux';
class Order extends Component {
    render() {
    	let {modifyItem} = this.props;
        return (
            <div className="modify">
               	<input type="text" value={modifyItem} 
               	onChange={this.props.handleAchange}/>
               	<button onClick={this.props.handleSuccess}>确认修改</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
	 modifyItem: state.modifyItem
})

const mapDispatchToProps=(dispatch,props)=>({
	handleAchange(e){
		let val = e.target.value;
		let action={
			type:"ACHANGE_INPUT",
			value:val
		}
		dispatch(action)
	},
	handleSuccess(){
		let action = {
			type:"SUCCESS_ITEM"
		}
		dispatch(action);
		props.history.push("./list")
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(Order)