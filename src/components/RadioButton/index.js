import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

export default ({ PROP, selected }) => {
    const [value, setValue] = useState("");

    return (
        <View>
            {PROP.map((res) => {
                return (
                    <View key={res.id} style={styles.container}>
                        <TouchableOpacity
                            style={styles.radioCircle}
                            onPress={() => {
                                setValue(res.id);
                            }}
                        >
                            {value === res.id && (
                                <View style={styles.selectedRb} />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.radioText}>{res.type}</Text>
                    </View>
                );
            })}
            {selected(value)}
        </View>
    );
};
