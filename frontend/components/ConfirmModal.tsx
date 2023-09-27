import { ReactElement } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { Button } from "./Button";

interface Props {
  handleConfirm: () => void;
  handleCancel: () => void;
  title: string;
  description?: string;
  enabled: boolean;
}
export function ConfirmModal({
  handleCancel,
  handleConfirm,
  title,
  description,
  enabled,
}: Props): ReactElement {
  return (
    <Modal animationType='slide' visible={enabled} transparent={true}>
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Button type='primary' title='Confirm' onPress={handleConfirm} />
        <Button type='secondary' title='Cancel' onPress={handleCancel} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 16,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 200,
    gap: 16,
  },
});
