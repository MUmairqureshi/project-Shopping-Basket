import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { increment, decrement, addbyamount, reset } from './productSlice'

export function Dispatch() {

    const [valueS, setValueS] = useState(0)
    const dispatch = useDispatch()


    const value = useSelector((state) => {

        return state.value.productnumber
    })


    return (
        <div>
            <h2> Count : {value} </h2>
            <button onClick={() => { dispatch(increment()) }}> INCREMENT</button>
            <br />
            <button onClick={() => { dispatch(decrement()) }}  > DECREMENT</button>
            <br />

            <input type="text" onChange={(e) => { setValueS(e.target.value) }} />
            <br />

            <button onClick={() => { dispatch(addbyamount(Number(valueS))) }} >INCREMENTByValue</button>

            <button onClick={() => { dispatch(reset()) }}  > RESET</button>

        </div>
    )
}