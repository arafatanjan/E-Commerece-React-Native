import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import { Container, Header, Icon, Item, Input , Text, Button, Box} from 'native-base';
import ProductList from './ProductList';
import SearchedProduct from './SearchedProduct';

const data = require('../../assets/data/products.json');

const ProductContainer = () => {

    const [products, setProducts ] = useState([]);
    const [focus, setFocus] = useState();
    const [productsFiltered, setProductsFiltered] = useState([]);
    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        return () => {
            setProducts([])
            setProducts([])
        setProductsFiltered([])
        }
    }, []);
     // Product Methods
  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };
  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };
   
    return (
       
        //     <Header searchBar rounded>
        //         <Item>
        //             <Icon name="ios-search"/>
        //            <Input
        //                 placeholder="Search"
        //                 //onFocus={}
        //                 //onChangeText={(text) => }
        //             />
        //         </Item>
        //     </Header>
        <Container>
          {/* <View searchBar rounded> */}
                 {/* <Item>
                    <Icon name="ios-search"/>
                   <Input
                        placeholder="Search"
                        //  onFocus={}
                        // onChangeText={(text) => }
                     />
                </Item> */}
             {/* </View> */}
             <Box alignItems="center">
      <Input m="5" variant="rounded" placeholder="Search" w="100%" onFocus={openList}
       onChangeText={(text) => searchProduct(text)} />
    </Box>
    {focus == true ? (
   <SearchedProduct 
//    navigation={props.navigation}
   productsFiltered={productsFiltered}  /> )
   
  : ( <View style={styles.container}>
 <Text>Product Container</Text>
 <View style={styles.listContainer}>
 <FlatList 
     data={products}
     numColumns={2}
     renderItem={({item}) => <ProductList 
     key={item.brand}
     item={item}/>}
     keyExtractor={item => item.brand}
 />
 
</View>
</View> 
    )
    
    }
      

      console.log(productsFiltered)  
        </Container>
        
    )

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listContainer: {
        // height: height,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
      },
  });

export default ProductContainer