import { FiMousePointer } from "react-icons/fi"

export default function Footer(){

    return (
        <>
        <footer>
            <div className="grid grid-cols-5 bg-gray-800 text-white p-1 pr-4 pl-4">
                <div>
                    <h5>
                        Exclusive
                    </h5>
                    <div>
                        Subscribe
                    </div>
                    <div>
                        Get 10% off your first order
                    </div>
                    <div>
                        <form action="sumbit">
                            <input placeholder="enter email" type="email" /> <button><FiMousePointer /></button>
                        </form>
                    </div>
                </div>
                <div>
                    <h5>
                        Support
                    </h5>
                    <div>
                        111 Bijoy, Dhaka, DH 1515, bangladesh
                    </div>
                    <div>
                        exclusive@gmail.com
                    </div>
                    <div>
                        +89483432
                    </div>
                </div>
                <div><h5>
                        Support
                    </h5>
                    <div>
                        111 Bijoy, Dhaka, DH 1515, bangladesh
                    </div>
                    <div>
                        exclusive@gmail.com
                    </div>
                    <div>
                        +89483432
                    </div></div>
                <div>Quick <h5>
                        Support
                    </h5>
                    <div>
                        111 Bijoy, Dhaka, DH 1515, bangladesh
                    </div>
                    <div>
                        exclusive@gmail.com
                    </div>
                    <div>
                        +89483432
                    </div></div>
                <div>Download App</div>
            </div>
        </footer>
        </>
    )
}