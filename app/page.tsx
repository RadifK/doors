import Main from "../components/main";
import Image from "next/image";
import fsPromises from "fs/promises";
import path from "path";

export async function getData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "/app/test.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  const stringData = jsonData.toString();
  // Parse data as json
  const objectData = JSON.parse(stringData);

  return objectData;
}

export default async function Home() {
  // const data = await getData();
  // console.log(data);
  return <Main />;
}
