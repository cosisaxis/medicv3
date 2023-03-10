import { ConnectWallet, useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";
import "./styles/Home.css";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [condition, setCondition] = useState("");
  
  
  return (
    <div class="container">
        <h1>Medicade</h1>
        <form action="" method="post">
            <div class="txt_field">
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)}  />
                <span></span>
                <label >UserName</label>
            </div>
            <div class="txt_field">
                <input type="password" required value={age} onChange={(e) => setAge(e.target.value)} />
                <span></span>
                <label >Age</label>
            </div>
            <div class="txt_field">
                <input type="password" required  value={gender} onChange={(e) => setGender(e.target.value)}/>
                <span></span>
                <label >Gender</label>
            </div>
            <div class="txt_field">
                <input type="password" required value={condition} onChange={(e) => setCondition(e.target.value)} />
                <span></span>
                <label >Condition</label>
            </div>
            <Web3Button
            contractAddress={"{{0x20A33008c5d6C1C6FB71BFA28c752fd0648EAb99}}"}
            action={async (Medicade) => Medicade.call("createMedRecord")}
            ></Web3Button>
            <div class="signup_link">
                
            </div>
        </form>
    </div>
  );
}
