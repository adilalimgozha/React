import { useState } from "react"

function History({history}) {

    return (
        <>
        {history.map((item, index) => 
            <div key={index}>
                {item.first} {item.operation} {item.second} {item.equals} {item.output}
            </div>
        )}
        
        
        </>
    )
}

export default History