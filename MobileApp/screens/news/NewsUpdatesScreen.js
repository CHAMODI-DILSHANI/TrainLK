import { StyleSheet, View, ScrollView } from "react-native";
import * as React from "react";
import { Provider, FAB } from "react-native-paper";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/navigation/TopBar";
import NewsInfoCard from "../../components/communityUpdates/NewsInfoCard";
import NewsUpdateDataScreen from "./NewsUpdateDataScreen";
import utils from "../../utils";
import { format } from "date-fns";

const NewsUpdatesScreen = () => {
  const navigation = useNavigation();

  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    const endpoint = `${utils.lanip}/items`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        setNews(data.news);
      })
      .catch(err => {});
  }, []);

  return (
    <Provider>
      <View style={tw`h-full`}>
        <View>
          <TopBar title="News Updates" goBack={true} />
        </View>
        <ScrollView style={[tw`my-2 px-4`]}>
          <View style={tw`mb-6`}>
            {news.map(n => (
              <NewsInfoCard
                key={n.newsID}
                title={n.title}
                data={n.description}
                time={format(new Date(n.timestamp), "dd-MM-yyyy hh-mm a")}
              />
            ))}
          </View>
        </ScrollView>
        <FAB
          icon="pen"
          style={tw`absolute bottom-10 right-6 bg-[#8aade6]`}
          onPress={() => navigation.navigate(NewsUpdateDataScreen)}
          mode="flat"
        />
      </View>
    </Provider>
  );
};

export default NewsUpdatesScreen;

const styles = StyleSheet.create({});
