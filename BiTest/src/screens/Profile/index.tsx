import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import CommonAppBar from "../../utils/view/common_app_bar/common_app_bar";
import { notiIcon } from "../../utils/image";
import ProfileModel from "../../models/profile_model";

const Profile = ()=>{
    let userProfile =  new ProfileModel("Nguyen van A", "Số 8, đường Lê Thánh Tông, Đồng Tâm, Hai Bà Trưng, Hà Nội")
    return (
        <>
            <CommonAppBar title = "Thông tin tài khoản" />
            {/* <CommonAppBar title = "Mức chiết khấu" imagePath = {notiIcon}/> */}
            <View style={styles.form}>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Mã</Text>
                    <Text style={styles.textRight}>AC000001</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Người đại diện</Text>
                    <Text style={styles.textRight}>{userProfile.getUserName()}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Số điện thoại</Text>
                    <Text style={styles.textRight}>0987654321</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Tên tài khoản</Text>
                    <Text style={styles.textRight}>Nhà thuốc ABC</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Mật khẩu</Text>
                    <Text style={styles.textRight}></Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Email</Text>
                    <Text style={styles.textRight}>pharmarabc@gmail.com</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Địa chỉ</Text>
                    <Text style={styles.textRight}>{userProfile.getAddress()}</Text>
    
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Trạng thái</Text>
                    <Text style={styles.textRight}>Hoạt động</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Loại tài khoản</Text>
                    <Text style={styles.textRight}>Đại lý</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Số buổi học</Text>
                    <Text style={styles.textRight}>1 buổi</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Có chứng chỉ GPP</Text>
                    <Text style={styles.textRight}></Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Tiền ký quỹ</Text>
                    <Text style={styles.textRight}>1.000.000 đ</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLeft}>Phí nền tảng</Text>
                    <Text style={styles.textRight}>200.000 đ</Text>
                </View>
                <View>
                    <Text style={styles.admin}>Muốn đổi thông tin tài khoản hãy liên hệ trực tiếp với admin của Midu</Text>
                </View>
            </View>
        </>
    );
}

export default Profile;