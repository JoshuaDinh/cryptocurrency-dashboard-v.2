import React from "react";
import "./learnMore.css";
import Navigation from "Components/Navigation/Navigation";
import LearnCard from "Components/LearnCard/LearnCard";

const LearnMore = () => {
  return (
    <div className="learn-more">
      <Navigation />
      <div className="learn-more-header">
        <h1>Crypto Basics</h1>
        <h4>
          New to crypto? Not for long - start with these guise and explainers
        </h4>
      </div>
      <div className="learn-more-guides-container">
        <LearnCard
          title="CryptoCurrency?"
          image="https://cdn.pixabay.com/photo/2018/03/07/19/41/blockchain-3206918_960_720.png"
          description=" A cryptocurrency is a digital or virtual currency that is secured by
          cryptography, which makes it nearly impossible to counterfeit or
          double-spend."
        />
        <LearnCard
          title="BlockChain?"
          image="https://cdn.pixabay.com/photo/2017/12/14/14/23/blockchain-3019120_960_720.png"
          description="A special kind of database that is immutable and holds a record of transactions that are placed on the network."
        />
        <LearnCard
          title="Bitcoin?"
          image="https://cdn.pixabay.com/photo/2017/10/08/10/31/bitcoin-2829407_960_720.png"
          description="Bitcoin is a decentralized digital currency that is created, distributed, traded, and stored with the use of a decentralized ledger system, known as a blockchain."
        />

        <LearnCard
          title="an NFT?"
          image="https://cdn.pixabay.com/photo/2021/05/27/17/40/nft-6288805_960_720.jpg"
          description="Non-fungible tokens or NFTs are cryptographic assets on blockchain with unique identification codes and metadata that distinguish them from each other."
        />
      </div>
    </div>
  );
};

export default LearnMore;
