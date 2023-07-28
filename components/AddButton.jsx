import React from "react";

import {
    TouchableWithoutFeedback,
    View,
    StyleSheet,
    Image,
    Animated,
} from "react-native";
import { EvilIcons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";

const AddButton = () => {
    const navigation = useNavigation();

    const [opened, setOpened] = React.useState(false)

    const animation = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(animation, {
            toValue: opened ? 1 : 0,
            duration: 300,
            friction: 2,
            useNativeDriver: false
        }).start()
    }, [opened, animation])

    const opacity = {
        opacity: animation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 1],
        }),
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>


                <TouchableWithoutFeedback>
                    <Animated.View style={[
                        styles.item,
                        opacity,
                        {
                            transform: [{
                                translateX: animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -60]
                                })
                            }, {
                                translateY: animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -50]
                                })
                            }]
                        }]}>
                        <FontAwesome5
                            name="video"
                            size={25}
                            // style={styles.itemIcon}
                            color={COLORS.primary}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback>
                    <Animated.View style={[
                        styles.item,
                        opacity,
                        {
                            transform: [{
                                translateY: animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -100]
                                })
                            }]
                        }]}>
                        <AntDesign
                            name="edit"
                            size={30}
                            // style={styles.itemIcon}
                            color={COLORS.primary}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => {
                    setOpened(false)
                    navigation.navigate("LiveVideo")
                }
                }>
                    <Animated.View style={[
                        styles.item,
                        opacity,
                        {
                            transform: [{
                                translateX: animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 60]
                                })
                            }, {
                                translateY: animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -50]
                                })
                            }]
                        }]}>
                        <FontAwesome5
                            name="video-slash"
                            size={25}
                            // style={styles.itemIcon}
                            color={COLORS.primary}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>

                {/* MAIN  */}
                <TouchableWithoutFeedback
                    onPress={() => setOpened(!opened)}
                    style={styles.addButton}>
                    <Animated.View style={[styles.addButtonInner, {
                        transform: [{
                            rotate: animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "45deg"]
                            })
                        }]
                    }]}>
                        <View>
                            <EvilIcons
                                name="plus"
                                size={50}
                                //   style={styles.addButtonIcon}
                                color={COLORS.primary}
                            />
                        </View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        height: 0,
    },
    box: {
        position: "relative",
        width: 60,
        height: 60,
        // marginTop: -5,
    },
    addButton: {
        shadowColor: COLORS.black,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    addButtonInner: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    addButtonIcon: {
        width: 40,
        height: 40,
        tintColor: COLORS.white,
    },
    item: {
        position: "absolute",
        top: 5,
        left: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: COLORS.primary
    },
    itemIcon: {
        width: 32,
        height: 32,
        tintColor: COLORS.white,
    },
});

export default AddButton;