import { connect } from "react-redux"
import Todo from "./Todo"

let mapStateToProps=(state)=>{
    return{
        valueWindow: state.todoPage.valueWindow,
        todoList: state.todoPage.todoList,
        check: state.todoPage.checkWindow,
        
       
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        
        dayFunction:(start,end,id)=>{
            let date1=new Date(start).getTime()
            let date2=new Date(end).getTime()
            let t=date2-date1
            let day=Math.floor(t/(1000*60*60*24))
            let color
                if (day<=5) {
                    color='red'
                }else if(day>5&&day<=10){
                    color='yellow'
                }else{
                    color='green'
                }
            let text
            if(day===1){
                text=`${day} день`
            }else if(day>1&&day<=4){
                text=`${day} дня`
            }
            else if(day>4){
                text=`${day} дней`
            }
            else if(day<1&&day>=-4){
                text=`${day} дня`
            }
            else if(day<-4){
                text=`${day} дней`
            }

            let show
            let textState
            let colorState
            if(day<1){
                show='red'
                textState='Не выполнено' 
                colorState='red'    
            }else{
                show='grey'
                textState='В процессе' 
                colorState='yellow'
            }

           
                dispatch({
                    type:'DATE_FUNCTION',
                    id: id,
                    text,
                    color,
                    show,
                    textState,
                    colorState,
                })
        },
            click:(e,id)=>{
                console.log(e)
                if(e.target.id==='1'){

                dispatch({
                    type: 'CHECK',
                    show:'green',
                    textState:'Выполнено',
                    colorState:'green',
                    id,

                })
            }else if(e.target.id==='2'){
                dispatch({
                    type:'DELETE_EL',
                    id,
                })
            }
        },
        window:()=>{
            dispatch({type:'WINDOW_OPEN'})
        },
        push:()=>{
            
            dispatch({type:'PUSH'})
        },
    }
}


let TodoContainer=connect(mapStateToProps,mapDispatchToProps)(Todo)
export default TodoContainer
