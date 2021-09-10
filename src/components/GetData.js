import ReposList from "./ReposList";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const GetData = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/Touchwonders/repos')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  data.sort((b, a) => a.stargazers_count - b.stargazers_count)
  return (
    <View style={{ flex: 1, padding: 24 }}>
{isLoading ? <Text>Loading...</Text> : 
      (
      <ReposList data={data} />
      )}
    </View>
  );
}; 
export default GetData;