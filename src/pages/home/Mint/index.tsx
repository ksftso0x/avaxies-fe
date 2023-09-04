import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  MintContainer,
  MintTitle,
  MintMark,
  MintContent,
  MintControl,
  Avaxies,
  TotalNumber,
  MintDescription,
} from "./index.styled";
const Mint = () => {
  const [mintNumber, setMintNumber] = useState(1);
  const [TotalValue, setTotalValue] = useState(1);
  const [displayFlag, setDisplayFlag] = useState(false);
  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" }
  ];
  useEffect(() => {
    setDisplayFlag(false);
  }, []);
  const setValue = (e: any) => {
    let val = e.value;
    setMintNumber(Number(val));
    setTotalValue(Number(val));
  };
  return (
    <MintContainer>
      <MintTitle>Public minting will close forever in...</MintTitle>
      <MintMark>Time's Up!</MintMark>
      <MintContent>
        <MintControl>
          <Select options={options} defaultValue={options[0]} onChange={(e: any) => setValue(e)} />
          {displayFlag && <Avaxies>Mint {mintNumber} Avaxies</Avaxies>}
          {!displayFlag && (
            <Avaxies className="disableBots">
              Mint {mintNumber} Avaxies
            </Avaxies>
          )}
        </MintControl>
        <TotalNumber>Total : {TotalValue} AVAX</TotalNumber>
      </MintContent>
      <MintDescription>
        Avaxies is on the <Link to="/">Avalanche Blockchain</Link> and requires
        MATIC to min! Don't know how to start? Check out our{" "}
        <Link to="/">FAQ</Link>. you can also look at the
        <Link to="/">Playground</Link> to learn what parts are remaining.
      </MintDescription>
    </MintContainer>
  );
};

export default Mint;
