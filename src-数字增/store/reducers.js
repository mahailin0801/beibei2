
const  defaultState ={
	n:0
}

export default (state=defaultState,action)=>{
	switch(action.type){
		case "ADD_NUMBER":
			let changeState = JSON.parse(JSON.stringify(state));
			changeState.n++;
			return changeState
	}
	return state
}
