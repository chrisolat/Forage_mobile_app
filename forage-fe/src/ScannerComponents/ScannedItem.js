import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, ActivityIndicator, Image} from 'react-native';
import { CheckBox } from '@rneui/base';


const ScannedItem = ({ item, barcodeNumber }) => {
    const [checked, setChecked] = useState(true)

    // Get passable api Ingredient from scanned name
    const getIngredients = (a) => {
        a = a
            .replace(/[.,\/#!$%\^&\*;:{}=\-_'`~()]/g, "")
            .toLowerCase()
            .split(" ");
        let result = [];
        let min_len = ingredients[0][0].length;
        for (var i = a.length; i >= 1; i--) {
            for (var j = 0; j + i <= a.length; j++) {
                let name = a.slice(j, i + j).join(" ");
                let index = name.length - min_len;
                if (index > 0 && index < ingredients.length) {
                    if (ingredients[index].includes(name)) {
                        result.push(name);
                    } else {
                        let threshold = Math.max(0.2 * name.length, 1);
                        let n = Math.floor(threshold);
                        for (let r = -1 * n; r < n; r++) {
                            if (index + r < 0 || index + r >= ingredients.length) {
                                break;
                            }
                            let temp = closest(name, ingredients[index + r]);
                            temp = temp ? temp : "";
                            if (distance(temp, name) < threshold) {
                                result.push(temp);
                            }
                        }
                    }
                }
            }
        }
        for (const [index, element] of result.entries()) {
            j = 0;
            while (j < result.length) {
                if (j == index) {
                    j++;
                    continue;
                }
                if (result[j].includes(element)) {
                    result.splice(index, 1);
                    break;
                }
                j++;
            }
        }

        return result.join(" ");
    };

    return (
        <View style={styles.container} key={barcodeNumber}>
            <Image style={styles.image} source={{ uri: item.images[0] }} />
            <Text style={styles.maintext}>{getIngredients(item.title)}</Text>
            <View style={styles.checkBox}>
                <CheckBox checked={checked} checkedColor='black' onPress={() => setChecked(!checked)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    checkBox: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        marginLeft: '5%'
    },

    image: {
        width: 70,
        height: 70,
        marginRight: '5%',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 20
    },

    maintext: {
        fontSize: 16,
        top: 20,
        width: '50%'
    },

    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        padding: 15,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center'
    }
});

export default ScannedItem
