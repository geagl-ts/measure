import React from "react";
import { Text, View } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const TextComponent = ({
    children,
    fontWeight,
    otherStyles,
    width,
    paddingHorizontal,
}) => {
    const [isLoaded] = useFonts({
        "quicksand-bold": require("../../assets/fonts/Quicksand/bold.ttf"),
        "quicksand-light": require("../../assets/fonts/Quicksand/light.ttf"),
        "quicksand-medium": require("../../assets/fonts/Quicksand/medium.ttf"),
        "quicksand-regular": require("../../assets/fonts/Quicksand/regular.ttf"),
        "quicksand-semi-bold": require("../../assets/fonts/Quicksand/semi-bold.ttf"),
    });

    if (!isLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View
                style={{
                    width: width ? width : "90%",
                    paddingHorizontal: paddingHorizontal
                        ? paddingHorizontal
                        : 5,
                }}
            >
                <Text
                    style={[
                        fontWeight
                            ? { fontFamily: "quicksand-" + fontWeight }
                            : { fontFamily: "quicksand-regular" },
                        otherStyles,
                    ]}
                >
                    {children}
                </Text>
            </View>
        );
    }
};

export default TextComponent;
