import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function CoffeeHouse({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(() => (Moralis.Plugins?.oneInch ? true : false), [Moralis.Plugins?.oneInch]);

  let messages = [];
  for ( let i = 0 ; i<10; i++){
    messages.push(<Timeline.Item dot="📄"><Text style={styles.text}>Message {i+1}. You can use a Super Urban Coffee NFT to write a message. Follow the guide on the right. 👉 </Text></Timeline.Item>);
  }

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            📮 <Text strong>New messages from SUP holders</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          {messages}
        </Timeline>
      </Card>
    <div>
    <Card
          style={styles.card}
          title={
            <>
              🚧 <Text strong>Under contruction</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="📍">
              <Text style={styles.text}>
                Displaying new messages
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="📍">
              <Text delete style={styles.text}>
                Change emojis in this guide
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="📍">
              <Text style={styles.text}>
                Mint form to sell Coffee NFT
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="📍">
              <Text style={styles.text}>
                Approve button to use NUBI
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="📍">
              <Text style={styles.text}>
                Drink form to use Coffee NFT
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="📍">
              <Text style={styles.text}>
                Check Coffee balance
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="📍">
              <Text style={styles.text}>
                Change Moralis Logo
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="🚀">
              <Text style={styles.text}>
                Upload website to AWS
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>  
      <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              📝 <Text strong>How to write your own message in Coffee House</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="🥤">
              <Text style={styles.text}>
                Get a Super Urban Coffee NFT
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✏️">
              <Text style={styles.text}>
                Write a message
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="🧊">
              <Text style={styles.text}>
                Select type of Coffee
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="🔢">
              <Text style={styles.text}>
                Select amount of Coffee
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="☕️">
              <Text style={styles.text}>
                Drink it!
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <Card
          style={styles.card}
          title={
            <>
              🥤 <Text strong>How to get a Super Urban Coffee NFT</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="🧊">
              <Text style={styles.text}>
                Select type of Coffee
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="🔢">
              <Text style={styles.text}>
                Select amount to mint
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="🔍">
              <Text style={styles.text}>
                Check the price
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="🔏">
              <Text style={styles.text}>
                Approve to use NUBI Coin
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="🏧">
              <Text style={styles.text}>
                Pay NUBI and get new Coffee NFT
              </Text>
            </Timeline.Item>

            <Timeline.Item dot="✅">
              <Text style={styles.text}>
                Check NFTs balance
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        
      </div>
    </div>
  );
}
