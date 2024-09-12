import React from "react";
import { Container, Row } from "react-bootstrap";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import { useEffect, useRef } from "react";
import Particle from "../Particle";
import countries from "../../constants/Countries";
import CountryCard from "./CountryCard";
function Travel() {
  const chartDivRef = useRef(null);
  function getLowerCaseId(id) {
    return id.toLowerCase();
  }
  useEffect(() => {
    // Create root element using the div reference
    if (!chartDivRef.current) return;
    let root = am5.Root.new(chartDivRef.current);

    // Create map chart
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        projection: am5map.geoNaturalEarth1(),
        wheelY: "zoom",

        minZoomLevel: 1,
        maxZoomLevel: 3,
      })
    );
    let backgroundSeries = chart.series.unshift(
      am5map.MapPolygonSeries.new(root, {})
    );

    backgroundSeries.mapPolygons.template.setAll({
      fillOpacity: 0,
      stroke: am5.color(0xffffff),
      strokeWidth: 1,
    });

    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180),
    });

    // Create polygon series for the map
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"], // Exclude Antarctica
      })
    );
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      templateField: "polygonSettings",
      interactive: true,
      // fill: am5.color("rgba(12, 8, 24, 0.904) "),
      fill: am5.color(0xffffff),
      stroke: am5.color("rgba(119, 53, 136, 0.459) "),
      strokeWidth: 0.5,
      shadow: {
        color: am5.color(0x000000),
        opacity: 0.5,
        blur: 5,
        offsetX: 2,
        offsetY: 2,
      },
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x677935),
    });
    polygonSeries.mapPolygons.template.events.on("click", function (ev) {
      const url = ev.target.dataItem.dataContext.url;
      if (url) {
        window.location.href = ev.target.dataItem.dataContext.url;
      }
    });
    polygonSeries.data.setAll(countries);

    // Dispose chart on component unmount
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <Container className="fluid travel-section">
      <Particle />
      <Container>
        <h1 className="travel-heading">
          Where I've
          <strong className="purple"> Been</strong>
        </h1>
        <p style={{ color: "white" }}>
          I am a travel enthusiast and here are the countries I have visited so
          far. Click on the countries to look at pictures!.
        </p>
        <Row
          className="travel-map"
          style={{ justifyContent: "center", paddingBottom: "10px" }}
        >
          <div
            id="chartdiv"
            ref={chartDivRef}
            style={{ width: "100%", height: "500px" }}
          ></div>
          ;
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />

      <br />
      <Container className="fluid">
        {countries.map((country, index) => (
          <Row
            id={getLowerCaseId(country.id)}
            style={{ margin: "15px", justifyContent: "center" }}
          >
            <CountryCard country={country} />
          </Row>
        ))}
        hello!
      </Container>
    </Container>
  );
}

export default Travel;
