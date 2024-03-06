import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';


interface Step2Props {
    Agentname: string;
    setAgentname: React.Dispatch<React.SetStateAction<string>>;
    Partner: string;
    setPartner: React.Dispatch<React.SetStateAction<string>>;
    Source: string;
    setSource: React.Dispatch<React.SetStateAction<string>>;
    Provincial: string;
    setProvincial: React.Dispatch<React.SetStateAction<string>>;
    District: string;
    setDistrict: React.Dispatch<React.SetStateAction<string>>;
    Address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
  }
  
  const Step2: React.FC<Step2Props> = ({
    Agentname,
    setAgentname,
    Partner,
    setPartner,
    Source,
    setSource,
    Provincial,
    setProvincial,
    District,
    setDistrict,
    Address,
    setAddress,
  }) => {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Tên đại lý"
          value={Agentname}
          onChangeText={(text) => setAgentname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Đối tác"
          value={Partner}
          onChangeText={(text) => setPartner(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Tên nguồn"
          value={Source}
          onChangeText={(text) => setSource(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Thành phố/Tỉnh"
          value={Provincial}
          onChangeText={(text) => setProvincial(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Quận/Huyện"
          value={District}
          onChangeText={(text) => setDistrict(text)}
        />
        <TextInput
          style={styles.inputaddress}
          placeholder="Địa chỉ cụ thể"
          value={Address}
          onChangeText={(text) => setAddress(text)}
        />
      </View>
    );
  };
  

export default Step2;
