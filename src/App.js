import "./App.css";
import Layout from "./components/layout";
import InfoCard from "./components/molecules/InfoCard";
import infoCardPattern from "./assets/images/infoCardPattern.png";
import { styled } from "@mui/material";
console.log(infoCardPattern, "infoCardPattern");

const TextWrapper = styled("div")({
  "& .title": {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "19.36px",
    color: "white",
  },
  "& .subtitle": {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "21.78px",
    color: "#FB6514",
  },
});

function App() {
  const infoData = [
    { title: "Title 1", subtitle: "title 1 description" },
    { title: "Date", subtitle: "07/08/2024" },
    { title: "Title 3", subtitle: "title 3" },
  ];

  return (
    <Layout>
      <div className="flex gap-[24px]">
          <InfoCard title={"Title 1"} className="min-w-[248px]">
            <div className="px-[25px] py-3">
              <div className="w-[198px] h-[195px] flex flex-col items-center justify-between">
                {infoData.map((item) => (
                  <TextWrapper className="flex flex-col gap-[8px] items-center">
                    <p className="title">{item.title}</p>
                    <p className="subtitle">{item.subtitle}</p>
                  </TextWrapper>
                ))}
              </div>
            </div>
          </InfoCard>
          <InfoCard title={"Title 2"} className="min-w-[248px]">
            <div
              className="w-[238px] h-[240px]"
              style={{ backgroundImage: `url(${infoCardPattern})` }}
            >
              <p className="text-[150px] flex justify-center items-center font-semibold text-white leading-[181.53px]">
                5
              </p>
            </div>
          </InfoCard>
        <InfoCard title={"Title 3"} className="min-w-[656px] flex-auto"></InfoCard>
      </div>
    </Layout>
  );
}

export default App;
