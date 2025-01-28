import { useEffect, useState } from "react"
import History from "./History"

function Calculator() {
    
    const [first, setFirst] = useState()
    const [second, setSecond] = useState()
    const [operation, setOperation] = useState()
    const [output, setOutput] = useState()
    const [history, setHistory] = useState([])

    const operations = [{name:'plus', sign: '+'}, {name:'minus', sign: '-'}, {name:'multiply', sign: '*'}, {name:'division', sign: '/'}]


    function calculateHandler(e) {
        e.preventDefault()

        switch (operation) {
            case "plus":
                setOutput(parseInt(first)+parseInt(second))
                break
            case "minus":
                setOutput(parseInt(first)-parseInt(second))
                break
            case "multiply":
                setOutput(parseInt(first)*parseInt(second))
                break
            case "division":
                setOutput(parseInt(first)/parseInt(second))
                break
        }
    }

    //Для того чтобы в аутпут не записывалось предыдущее состояние с предыдущего рендера а сразу бралось новое измененное
    useEffect(() => {
        if (operation){
            const fullOperation = operations.find(oper => oper.name == operation)
            const historyItem = {first: first, second: second, operation: fullOperation.sign, equals: '=', output: output}
            setHistory([...history, historyItem])
        }
    }, [output])
    console.log(history)


    function handleChange1(e) {
        setFirst(e.target.value)
    }

    function handleChange2(e) {
        setSecond(e.target.value)
    }

    function handleOperation(e) {
        setOperation(e.target.value)
    }

    return (
        <>
            <form onSubmit={calculateHandler}>
                <input type="number" onChange={handleChange1}/>
                <select onChange={handleOperation}>
                    <option value="">Choose operation</option>
                    {operations.map((oper, index) => 
                        <option key={index} value={oper.name}>{oper.sign}</option>
                    )}
                </select>
                <input type="number" onChange={handleChange2}/>
                <button type="submit">Calculate</button>
            </form>
            <h2>{output}</h2>

            <div>
                <h2>History</h2>
                
                <History history={history}></History>
            </div>
        </>
    )
}

export default Calculator