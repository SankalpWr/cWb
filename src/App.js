import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./Comp/Navbar";
import Header from "./Comp/Header";
import { Box } from "@material-ui/core";
import Tab from "./Comp/Tab";
import FlexGrid from "./FlexGrid";
import layoutConfiguration from "./layoutConfiguration.json";
import Freeda from "./Comp/Freeda";
import Footer from "./Comp/Footer";
import Header1 from "./Comp/Header1";
import { useDispatch } from "react-redux";
import { getData } from "./redux/Actions/card";
import { useSelector } from "react-redux";
import BoxFlex from "./Comp/BoxFlex";
import PersistentDrawer from "./Comp/PersistentDrawer";
import Tab1 from "./Comp/Tab1";
import BoxFlex1 from "./Comp/BoxFlex1";

function App() {
  const getComponent = (data) => {
    // console.log(data)
    return (
      <div
        style={{
          marginTop: "1.5%",
          backgroundColor: "#273D49BF",
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.component}
      </div>
    );
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);



  
  const cardArray = useSelector((state) => state.cardReducer.card);

  return (
    <>
      <Box style={{ display: "flex" }}>
        <Navbar />
        {/* <PersistentDrawer/> */}
      </Box>
      <Header  />
     
      {/* <Header1/> */}
      
      <Box style={{ display: "flex", marginLeft: "5%" }}>
        <Tab/>
  
      </Box>
     
      <div className="App">
      
        {/* <FlexGrid
        layoutConfiguration={layoutConfiguration["lg"]}
        getComponent={getComponent}
      /> */}
       <div style = {{width:"100%",height:"100%",display:"flex",flexWrap:"wrap"}}>
      {
      cardArray.map((data)=>(
        <>
        <BoxFlex customerName = {data.customerName} customerNumber = {data.customerNumber} bucketNames = {data.bucketNames} pastDueBucketDocumentCount = {data.pastDueBucketDocumentCount}/>
        </>
      )
      )
      
    }
     <BoxFlex1 />
      </div>
     
      </div>
      
      <div className="App-Navbar">
        <Footer />
      </div>
      {/* <BodyBox/> */}
    </>
  );
}

export default App;
