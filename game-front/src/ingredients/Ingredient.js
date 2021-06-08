// import {useSelector, useDispatch} from 'react-redux'
import Choice from '../choices/Choice.js'
import '../style/ChoicesStyle.css'


export default function Ingredient(props) {


//   const dispatch = useDispatch()

  return (
        <>
            <h3>{props.indIng.name}</h3>
            {props.indIng && props.indIng.choices.map(choice =>  <div className="ChoicesStyle"><Choice key={choice.id} item={choice}/></div>)}
        </>
    )
}

