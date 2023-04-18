import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import React, { useLayoutEffect } from "react"
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

const RestaurantScreen = () => {

    const navigation = useNavigation();

    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
    } } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);


    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{
                        uri: imgUrl
                    }}
                    className="h-56 w-full p-4"
                />
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="absolute top-14 left-5 bg-gray-100 p-3 rounded-full shadow-lg">
                    <ArrowLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>
            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon color={"green"} opacity={0.5} size={18} />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating}</Text> . {genre}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <MapPinIcon color={"gray"} opacity={0.5} size={18} />
                            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                    <QuestionMarkCircleIcon color={"gray"} opacity={0.6} size={20} />
                    <Text className="pl-2 flex-1 text-md font-bold">
                        Have a food allergy?
                    </Text>
                    <ChevronRightIcon color={"#00CCBB"} opacity={0.6} size={20}/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};

export default RestaurantScreen;
