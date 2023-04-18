import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from "react-native-heroicons/outline";
import Categories from '../components/categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    });

    return (
        <SafeAreaView className="bg-white py-5 flex-col">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1 justify-center">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now! ☺️
                    </Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={15} color={"#00CCBB"} />
                    </Text>
                </View>
                <UserIcon size={30} color={"#00CCBB"} />
            </View>
            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-2 rounded-full ">
                    <MagnifyingGlassIcon size={25} color={"#00CCBB"} />
                    <TextInput placeholder="Restaurants and cuisines" keyboardType='default' />
                </View>
                <AdjustmentsVerticalIcon size={26} color={"#00CCBB"} />
            </View>
            {/* body */}
            <ScrollView className="bg-gray-200 h-[calc(100vh-17vh)]">
                {/* category */}
                <Categories />
                {/* featured rows */}
                <FeaturedRow
                    id="123"
                    image1="photo-1565299624946-b28f40a0ae38"
                    image2="photo-1546069901-ba9599a7e63c"
                    image3="photo-1555939594-58d7cb561ad1"
                    image4="photo-1482049016688-2d3e1b311543"
                    title="Featured"
                    description="Paid placements from our partners"
                    featuredCategory="featured"
                />
                <FeaturedRow
                    id="1234"
                    image1="photo-1529042410759-befb1204b468"
                    image2="photo-1482049016688-2d3e1b311543"
                    image3="photo-1565299624946-b28f40a0ae38"
                    image4="photo-1555939594-58d7cb561ad1"
                    title="Tasty Discount"
                    description="Everyone's been enjoying these juicy discounts!"
                    featuredCategory="discounts"
                />
                <FeaturedRow
                    id="12345"
                    image1="photo-1555939594-58d7cb561ad1"
                    image2="photo-1482049016688-2d3e1b311543"
                    image3="photo-1476224203421-9ac39bcb3327"
                    image4="photo-1529042410759-befb1204b468"
                    title="Offers near you!"
                    description="Why not support your local restaurant tonight!"
                    featuredCategory="offers"
                />
                {/* Footer */}
                <View className="bg-white p-4 flex-1 items-center justify-center">
                    <Text>Food Delivery © 2023 All Rights Reserved </Text>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

export default HomeScreen;