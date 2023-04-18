import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ image1, image2, image3, image4, title, description, featuredCategory }) => {


    return (
        <View className="pb-4">
            <View className="flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color={"#FF5E97"} />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                    paddingTop: 10,
                }}
                showsHorizontalScrollIndicator={false}
                className="flex-row flex-1 space-x-2 pt-4"
            >
                {/* RestaurantCards */}

                <RestaurantCard
                    id={1}
                    imgUrl={"https://images.unsplash.com/"+image1+"?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                    title={"Yo! Sushi"}
                    rating={4.5}
                    genre={"Japanese"}
                    address={"123 Main St"}
                    short_description={"This is a Test Description"}
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={2}
                    imgUrl={"https://images.unsplash.com/"+image2+"?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                    title={"Nando's"}
                    rating={4.8}
                    genre={"Offers"}
                    address={"Clink Street"}
                    short_description={"This is a Test Description"}
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={2}
                    imgUrl={"https://images.unsplash.com/"+image3+"?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                    title={"Boiled Egg"}
                    rating={4.8}
                    genre={"Offers"}
                    address={"Clink Street"}
                    short_description={"This is a Test Description"}
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={2}
                    imgUrl={"https://images.unsplash.com/"+image4+"?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                    title={"Chicken ball"}
                    rating={4.8}
                    genre={"Offers"}
                    address={"Clink Street"}
                    short_description={"This is a Test Description"}
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    );
}

export default FeaturedRow;