import React from "react";
import {
  FAQContainer,
  KeyInfoContainer,
  KeyInfoTitle,
  KeyInfoContent,
  FAQsContainer,
  FAQsTitle,
  FAQsSubTitle,
  FAQsContent,
  AvalancheTitle,
  AvalancheContent,
} from "./index.styled";
import profile from "../../assets/nextimg/profile.png/256/75d76d.png";
import logo1 from "../../assets/nextimg/bwpunks.png/256/75201f.png";
import logo2 from "../../assets/chubbies63a9.gif";
const FAQ = () => {
  return (
    <FAQContainer>
      <KeyInfoContainer>
        <KeyInfoTitle>Key Info</KeyInfoTitle>
        <KeyInfoContent>
          <li>
            <span>Sale Date:</span> September 18, 2021
          </li>
          <li>
            <span>Sale Date:</span> September 18, 2021
          </li>
          <li>
            <span>Maximum number of tokens:</span> 20,000
          </li>
          <li>
            <span>Tokens withheld from sale:</span> 500 (with giveaways and
            airdrops)
          </li>
          <li>
            <span>Price per token:</span> 100 MATIC (~0.039 ETH with negligible
            gas fee)
          </li>
          <li>
            <span>Token type:</span> ERC-721
          </li>
          <li>
            <span>Blockchain:</span> Avalanche
          </li>
          <li>
            <span>Art file hosting:</span> IPFS
          </li>
          <li>
            <span>Metadata hosting:</span> IPFS and On-chain
          </li>
          <li>
            <span>Number of traits:</span> 7
          </li>
          <li>
            <span>Number of attributes:</span> 84
          </li>
          <li>
            <span>Licensing:</span> <a href="/terms">non-exclusive license</a>{" "}
            for both personal and/or commercial use
          </li>
          <li>
            <span>Smart contract:</span>{" "}
            <a
              href="https://polygonscan.com/address/0x44F01563Dbcb67170a071Ea014Af58d2032eFF61"
              target="_blank"
              rel="noreferrer"
            >
              contract
            </a>
          </li>
        </KeyInfoContent>
      </KeyInfoContainer>
      <FAQsContainer>
        <FAQsTitle>FAQs</FAQsTitle>
        <FAQsSubTitle>Avalanche</FAQsSubTitle>
        <FAQsContent>
          <div>
            <AvalancheTitle>What is Avalanche?</AvalancheTitle>
            <AvalancheContent>
              Avalanche is Layer 2 scaling solution for Ethereum and a fantastic
              choice for our NFT. Avalanche is very fast and scalable, enabling
              gas fee of ~$0.01 or less, which is crucial for this project as we
              do 10X more on the contract compared to other projects.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>How do I get started?</AvalancheTitle>
            <AvalancheContent>
              Get a{" "}
              <a href="https://metamask.io/" target="_blank" rel="noreferrer">
                Metamask
              </a>{" "}
              chrome extension.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>How do I connect to the Avalanche Chain?</AvalancheTitle>
            <AvalancheContent>
              If the Button on the Navbar doesn't help you add the Avalanche Chain
              automatically for you, then you might need to follow{" "}
              <a
                href="https://docs.matic.network/docs/develop/metamask/config-polygon-on-metamask/"
                target="_blank"
                rel="noreferrer"
              >
                these steps
              </a>{" "}
              to add the Avalanche network to your Metamask wallet.
            </AvalancheContent>
          </div>
          
          <div>
            <AvalancheTitle>
              My wallet is connected but I don't see my bots.
            </AvalancheTitle>
            <AvalancheContent>
              As this site fires a lot of web3 requests, sometimes the RPC node
              will be congested. You can either check back later or{" "}
              <a
                href="https://docs.dfyn.network/guides/changing-polygons-rpc-endpoint-on-metamask"
                target="_blank"
                rel="noreferrer"
              >
                change your RPC node
              </a>{" "}
              to a different one.
            </AvalancheContent>
          </div>
        </FAQsContent>
        <FAQsSubTitle>General</FAQsSubTitle>
        <FAQsContent>
          <div>
            <AvalancheTitle>What's an NFT?</AvalancheTitle>
            <AvalancheContent>
              An NFT, or “non-fungible token”, is a new way of collecting art.
              Compared to traditional art, it uses crypto technology and allows
              everyone to publicly see each others' collection. Each NFT has a
              programmable smart contract behind it that allows creators to do
              creative things such as airdropping, breeding, burning, or
              generating new tokens.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>Why get a Avaxie?</AvalancheTitle>
            <AvalancheContent>
              <ul>
                <li>You like the GIF art and the Avaxies project</li>
                <li>Unique deflationary combine mechanism</li>
                <li>
                  Nonexclusive license with unlimited personal and/or commercial
                  use
                </li>
                <li>
                  Guaranteed access to our future projects (as proven with
                  Chubbies to Avaxies ownership)
                </li>
              </ul>
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>
              Other collections feature 10k or fewer tokens. Isn't 20k too many?
            </AvalancheTitle>
            <AvalancheContent>
              We wanted to create at least 10k tokens to reward the owners of
              the 10k Chubbies project. With the addition of the combination
              mechanism, some Avaxies will be burned and the collection is
              deflationary. This will make certain bots rarer than others, the
              collection size smaller and smaller, and in theory more expensive
              over time.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>Are Avaxies good investments?</AvalancheTitle>
            <AvalancheContent>
              Months of hard work have been put into this project—various
              original art concepts, solidifying a unique combination mechanism,
              and much more—and we are constantly brainstorming ways to provide
              more value for Avaxies owners. We wish we could say “the price
              will go to the moon!” but the truth is that the NFT market is
              volatile and new NFTs are coming out every day. We are not
              financial advisors and cannot predict the future price of our
              project. We believe in Avaxies and have plans to continue
              developing more utility. Ultimately, if you like the art then
              there's no loss in collecting what you enjoy.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>What about profile pictures?</AvalancheTitle>
            <AvalancheContent>
              <img src={profile} width="100px" height="100px" alt="profile" />
              <br />
              We will be providing a profile image png in the bot's detail page
              at launch. It will look like the png above.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>Future Plans</AvalancheTitle>
            <AvalancheContent>
              We believe in the smart contract aspect of the project and want to
              do cool things with it. We plan to deliver the combination
              mechanism and profile picture generator upfront. If Avaxies does
              well, we plan to explore a Bomberman-like game with abilities
              directly related to your bot's traits. Please note that we are a
              team of 2 and are working hard to build for this project.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>What can I do with my Avaxies?</AvalancheTitle>
            <AvalancheContent>
              You are free to use them for personal and/or commercial purposes
              under this <a href="/terms">non-exclusive license</a>.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>Why I don't see my bot right away?</AvalancheTitle>
            <AvalancheContent>
              Due to the fair and transparent on-chain generation mechanism,
              Avaxies are first generated on-chain. You can view your bot's
              metadata right away in the <a href="/collection">My Bots</a> page.
              Our server needs to listen to the Mint event on the chain,
              generate the respective images (gifs, pngs, profile pictures) and
              upload them. This will take longer in the beginning as we are
              still optimizing the server but will take shorter (within 30
              minutes) after we set up everything.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>This is cool. How do I get involved?</AvalancheTitle>
            <AvalancheContent>
              Join our Discord to discuss with us.
            </AvalancheContent>
          </div>
        </FAQsContent>
        <FAQsSubTitle>Airdrops</FAQsSubTitle>
        <FAQsContent>
          <div>
            <AvalancheTitle>Will rare Chubbies get rare Avaxies?</AvalancheTitle>
            <AvalancheContent>
              Godmode Chubbies (#0, #9999) will be guaranteed a rare Avaxie as
              a token of appreciation. All other Chubbies are treated the same.
            </AvalancheContent>
          </div>
        </FAQsContent>
        <FAQsSubTitle>Combine</FAQsSubTitle>
        <FAQsContent>
          <div>
            <AvalancheTitle>How do I "combine" my Avaxies?</AvalancheTitle>
            <AvalancheContent>
              You can head over to the Combine page (when launched) and choose
              between 2 to 5 of the Avaxies you own, at a time. You will be
              able to customize a new Avaxie by selecting your favorite parts
              from the bots you have selected. This action cannot be reverted
              and the selected Avaxies will be burned.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>Can I combine multiple times?</AvalancheTitle>
            <AvalancheContent>
              Combining selected bots is a one-time irreversible operation. The
              Avaxies used to combine will be burned to mint the new bot. You
              can combine bots up to 3 times.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>
              Can I combine into a Avaxie that already exists?
            </AvalancheTitle>
            <AvalancheContent>
              All Avaxies are unique. So you cannot create a Avaxie that
              already exists. The combination used for detecting duplication is
              as follows: Helmet, Face, Body, Arm, Engine.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>What does it cost to combine?</AvalancheTitle>
            <AvalancheContent>
              The first combine is free of charge. The second combine will cost
              100 MATIC and the final combine will cost 200 MATIC. The second
              and third combine are only there for people who want to build the
              strongest bot.
            </AvalancheContent>
          </div>
          <div>
            <AvalancheTitle>When will the Combine feature be ready?</AvalancheTitle>
            <AvalancheContent>
              We will deliver this feature immediately instead of including it
              as a roadmap activation! If there are no technical difficulties
              (finger crossed), we plan to enable it as soon as reveal.
            </AvalancheContent>
          </div>
        </FAQsContent>
      </FAQsContainer>
    </FAQContainer>
  );
};

export default FAQ;
