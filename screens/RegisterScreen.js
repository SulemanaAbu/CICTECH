import {Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const [name, setName] = useState("");
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white", alignItems: "center", marginTop: 50}}>
            <View>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={{
                        uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                    }}
                />
            </View>

            <KeyboardAvoidingView>
                <View>
                    <Text style={{fontSize:17, fontWeight:"bold",marginTop:12,color:"#041E42",alignSelf:"center"}}>Register a new Account</Text>
                </View>

                <View style={{marginTop: 50}}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap:5,
                            backgroundColor: "#D0D0D0D0",
                            paddingVertical: 5,
                            borderRadius:5,
                            marginTop:30
                        }}>
                        <Ionicons name={"person"}
                                  size={24}
                                  color={"gray"}
                                  style={{marginLeft: 8}}  />
                        <TextInput
                            value={name}
                            onChangeText={(text) => setName(text)}
                            style={{color:"gray",
                                marginVertical:10,
                                width:300,
                                fontSize:name ? 16 : 16}}
                            placeholder={"enter your Name"}/>
                    </View>

                </View>

                <View style={{marginTop: 10}}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap:5,
                            backgroundColor: "#D0D0D0D0",
                            paddingVertical: 5,
                            borderRadius:5,
                            marginTop:30
                        }}>
                        <MaterialIcons style={{
                            marginLeft:8,
                            color:"gray"}} name={"email"} size={24} color={"black"}/>
                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{
                                color:"gray",
                                marginVertical:10,
                                width:300,
                                fontSize:email ? 16 : 16}}
                            placeholder={"enter your Email"}/>
                    </View>

                </View>

                <View style={{marginTop:10}}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap:5,
                            backgroundColor: "#D0D0D0D0",
                            paddingVertical: 5,
                            borderRadius:5,
                            marginTop:30
                        }}>
                        <AntDesign style={{marginLeft:8,
                            color:"gray"}} name={"lock1"} size={24} color={"gray"}/>
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={{
                                color:"gray",
                                marginVertical:10,
                                width:300,
                                fontSize:password ? 16 : 16}}
                            placeholder={"enter your Password"}/>
                    </View>



                </View>

                <View style={{
                    marginTop:12,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent:"space-between"}}>
                    <Text>Keep me logged in</Text>

                    <Text style={{color:"#007FFF",fontWeight:"500"}}>Forgot Password</Text>
                </View>

                <View style={{marginTop:80}}/>

                <Pressable style={{width:200,
                    backgroundColor: "#FEBE10",
                    borderRadius:6,
                    marginLeft:"auto",
                    marginRight:"auto",
                    padding:15
                }}>
                    <Text style={{
                        textAlign:"center",
                        color:"white",fontSize:16,fontWeight:"bold",
                    }}>Register</Text>
                </Pressable>

                <Pressable onPress={() => navigation.goBack()} style={{marginTop:15}}>
                    <Text style={{textAlign:"center", marginTop:15, color:"gray", fontSize:16}}>Already have an account? Sign In</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

export default RegisterScreen;

const styles = StyleSheet.create({});