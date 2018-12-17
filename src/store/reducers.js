
const  defaultState ={
	inputVal:'',
	todoList:[],
	modifyIndex:-1,
	modifyItem:""
}

export default (state=defaultState,action)=>{
	switch(action.type){
		case "INPUT_CHANGE":
			let changeState = JSON.parse(JSON.stringify(state));
			changeState.inputVal = action.value;
			return changeState
			
		case "ADD_ITEM":
			let addState = JSON.parse(JSON.stringify(state));
			addState.todoList.push(addState.inputVal);
			addState.inputVal="";
			return addState;
		
		case "MODIFY_ITEM":
			let modState = JSON.parse(JSON.stringify(state));
			modState.modifyIndex = action.value;
			modState.modifyItem = modState.todoList[action.value];
			return modState;
			
		case "ACHANGE_INPUT":
			let moddifyState = JSON.parse(JSON.stringify(state));
			moddifyState.modifyItem = action.value;
			return moddifyState;
		
		case "SUCCESS_ITEM":
			let modifyState = JSON.parse(JSON.stringify(state));
			modifyState.todoList.splice(modifyState.modifyIndex,1,modifyState.modifyItem);
			return modifyState;
			
		case "DEL_ITEM":
			let delState = JSON.parse(JSON.stringify(state));
			delState.todoList.splice(action.value,1);
			return delState;
	}
	return state
}
