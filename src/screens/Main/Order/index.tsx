import React, { useState } from 'react';
import { SafeAreaView, Text, View, KeyboardAvoidingView,TouchableOpacity, TextInput, ScrollView, Modal,Image  } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import styles from './styles';
import i18n from '../../../translations/i18n';

type SearchBarComponentProps = {};


const OrderScreen: React.FC<SearchBarComponentProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();

  const [language, setLanguage] = useState('VI');
  const [search, setSearch] = useState("");
  const [describe, setDescribe] = useState("");
  const [selectedId1, setSelectedId1] = useState<string | null>(null);
  const [selectedId2, setSelectedId2] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [shippingFee, setShippingFee] = useState(0);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);
  const [products, setProducts] = useState([
    { name: 'Midu MenaQ7 360ml', discount: 10, price: 500000, image: require('./../../../assets/img/MenaQ7-360ml.png') },
    { name: 'Midu MenaQ7 180mcg', discount: 20, price: 360000, image: require('./../../../assets/img/MenaQ7-180mcg.png') },
  ]);
  const [quantity, setQuantity] = useState(1);

  const handleChangeLanguage = (value: string) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  const handleNavigateBack = () => {
    navigation.navigate('SignInScreen');
  };

  const [displayedProductCount, setDisplayedProductCount] = useState(0);
  const INITIAL_CONTAINER_HEIGHT = 160;
  const ITEM_HEIGHT = 100;

// Trong hàm `handleAddProduct`, bạn cần cập nhật mảng sản phẩm để thêm trường `quantity` cho mỗi sản phẩm
const handleAddProduct = () => {
  if (displayedProductCount < products.length) {
    const updatedProducts = products.map(product => ({ ...product, quantity: 1 }));
    setDisplayedProductCount(displayedProductCount + 1);
    setProducts(updatedProducts);
  }
};

// Thêm index vào hàm `handleIncrease` và `handleDecrease` để xác định sản phẩm cụ thể được tăng hoặc giảm số lượng
const handleIncrease = (index) => {
  const newProducts = [...products];
  newProducts[index].quantity += 1;
  setProducts(newProducts);
};

const handleDecrease = (index) => {
  const newProducts = [...products];
  if (newProducts[index].quantity > 1) {
    newProducts[index].quantity -= 1;
    setProducts(newProducts);
  }
};

// Trong hàm `renderDisplayedProducts`, sử dụng `product.quantity` thay vì `quantity`
const renderDisplayedProducts = () => {
  return products.slice(0, displayedProductCount).map((product, index) => (
    <View key={index} style={styles.productDetail}>
      <Image source={product.image} style={styles.productImage} />
      <View style={styles.from}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.sale}>{t('title:Discount')}{product.discount}%</Text>
        <Text style={styles.money}>{product.price} đ</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => handleDecrease(index)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.number}>{product.quantity}</Text>
          <TouchableOpacity onPress={() => handleIncrease(index)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ));
};

  const radioButtons1 = [
    { label: 'title:Seller_bears_the_fee', value: 'title:Seller_bears_the_fee' },
    { label: 'title:Customer_bears_the_fee', value: 'title:Customer_bears_the_fee' },
  ];

  const radioButtons2 = [
    { label: 'VN Post', value: 'VN Post', price: 20000 },
    { label: 'title:receive_at_warehouse', value: 'warehouse', price: 35000 },
    { label: 'title:Send_to_the_garage', value: 'garage', price: 50000 },
  ];

  const radioButtons3 = [
    { label: 'Prepayment', value: 'prepayment' }
  ];

  const handleRadioButton1Press = (value: string | React.SetStateAction<null>) => {
    setSelectedId1(value);
  };

  const handleRadioButton2Press = (value: string | React.SetStateAction<null>, price: React.SetStateAction<number>) => {
    setSelectedId2(value);
    setShippingFee(price);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <SafeAreaView>
          <View style={styles.header}>
            <Ionicons style={styles.back} onPress={handleNavigateBack} name="chevron-back" size={20} color="#fff" />
            <Text style={styles.header_order}>{t('title:Create_new_order')}</Text>
          </View>
          <View style={styles.main}>
            <View style={[styles.product, { height: INITIAL_CONTAINER_HEIGHT + displayedProductCount * ITEM_HEIGHT }]}>
              <Text style={styles.title}>{t('title:product')}</Text>
              {renderDisplayedProducts()}
              <TouchableOpacity style={styles.add_product} onPress={handleAddProduct}>
                <Text style={styles.button_Product}>{t('title:Add_Product')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.client}>
              <Text style={styles.title}>{t('title:client')}</Text>
              <TextInput
                style={styles.search}
                placeholder="Tìm kiếm"
                value={search}
                onChangeText={(text) => setSearch(text)}
                placeholderTextColor="#00000040"
              />
              <View style={styles.button_Client}>
                <Text style={styles.add_client}>Nguyễn Văn An</Text>
                <Text style={styles.sdt}>0321234532</Text>
              </View>
              <TouchableOpacity >
              </TouchableOpacity>
            </View>
            <View style={styles.delivery_address}>
              <Text style={styles.title}>{t('title:delivery_address')}</Text>
              <Text style={styles.fullname}>Trần Văn Quyết | 03288771120 </Text>
              <Text style={styles.address1}>Số 6 đường Minh Khai</Text>
              <Text style={styles.address2}>Đồng Tâm, Hai Bà Trưng, Hà Nội </Text>
            </View>
            <View style={styles.carrier}>
              <Text style={styles.title}>{t('title:carrier')}</Text>
              {radioButtons1.map((button, index) => (
                <View key={index} style={styles.radioButtonContainer}>
                  <RadioButton.Item
                    label=""
                    value={button.value}
                    status={selectedId1 === button.value ? 'checked' : 'unchecked'}
                    onPress={() => handleRadioButton1Press(button.value)}
                  />
                  <Text style={styles.radioButtonLabel}>{button.label}</Text>
                </View>
              ))}
            </View>
            <View style={styles.shipping}>
              <Text style={styles.title}>{t('title:carrier')}</Text>
              {radioButtons2.map((button, index) => (
                <View key={index} style={styles.radioButtonContainer}>
                  <RadioButton.Item
                    label=""
                    value={button.value}
                    status={selectedId2 === button.value ? 'checked' : 'unchecked'}
                    onPress={() => handleRadioButton2Press(button.value, button.price)}
                  />
                  <Text style={styles.radioButtonLabel}>{button.label}</Text>
                </View>
              ))}
              <View style={styles.transport_fee}>
                <Text style={styles.priceText1}>{t('title:transport_fee')} :</Text>
                <Text style={styles.priceText2}>{shippingFee} đ </Text>
              </View>
            </View>
            <View style={styles.payment}>
              <Text style={styles.title}>{t('title:payment_methods')}</Text>
              {radioButtons3.map((button, index) => (
                <View key={index} style={styles.radioButtonContainer}>
                  <RadioButton.Item
                    label=""
                    value={button.value}
                    status={selectedId1 === button.value ? 'checked' : 'unchecked'}
                    onPress={() => handleRadioButton1Press(button.value)}
                  />
                  <Text style={styles.radioButtonLabel}>{button.label}</Text>
                </View>
              ))}
            </View>
            <View style={styles.describe}>
              <Text style={styles.title}>{t('title:describe')}</Text>
              <TextInput
                style={styles.describe_style}
                placeholder='title:Enter_your_message_Midu'
                value={describe}
                onChangeText={(text) => setDescribe(text)}
              />
            </View>
            <View style={styles.pay}>
              <Text style={styles.title}>{t('title:pay')}</Text>
                <View style={styles.order_value}>
                  <Text>{t('title:order_value')}</Text>
                  <Text>0 đ</Text>
                </View>

                <View style={styles.discount}>
                  <Text>{t('title:discount')}</Text>
                  <Text>0 đ</Text>
                </View>

                <View style={styles.Delivery_charges}>
                  <Text>{t('title:Delivery_charges')}</Text>
                  <Text>0 đ</Text>
                </View>

                <View style={styles.total_payment}>
                  <Text>{t('title:total_payment')}</Text>
                  <Text>0 đ</Text>
                </View>
                <View style={styles.Total_amount_the_order_needs_to_pay}>
                    <Text style={styles.blue}>{t('title:Total_amount_the_order_needs_to_pay')}</Text>
                    <Text style={styles.blue}>0 đ</Text>
                </View>
                <View style={styles.Delivery_fee_needs_to_be_paid_by_the_customer}>
                    <Text style={styles.pink}>{t('title:Delivery_fee_needs_to_be_paid_by_the_customer')}</Text>
                    <Text style={styles.pink}>0 đ</Text>
                 </View>
            </View>
            <View>
            <TouchableOpacity onPress={handleNavigateBack} style={styles.create_order}>
                <Text style={styles.order}>{t('button:create_order')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default OrderScreen;
function onPressIncrease(index: any) {
  throw new Error('Function not implemented.');
}

