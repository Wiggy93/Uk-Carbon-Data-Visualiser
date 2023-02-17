
import { useState } from "react";
import GenerationMix from "./GenerationMix.jsx";
import DateSelector from "./DateSelector.jsx";

const PowerGen = () => {
    const [powerData, setPowerData] = useState("");
    const [startDate, setDate] = useState("");
    const [endDate, setEndDate] = useState("");
  

    return (
        <section>
            <h2>Power Generation</h2>
            <DateSelector setEndDate={setEndDate} setDate={setDate}/>
            <GenerationMix powerData={powerData}  setPowerData={setPowerData} startDate={startDate} endDate={endDate}/>
        </section>
    )
}

export default PowerGen